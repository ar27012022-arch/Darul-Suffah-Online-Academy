# ==============================================================
# Darul Suffah Online Academy - Local HTTP Server (Zero Dependency)
# Uses built-in .NET System.Net.HttpListener (No Node or Python required)
# ==============================================================

param(
    [int]$Port = 3000
)

$HostIP = "127.0.0.1"
$Prefix = "http://$HostIP`:$Port/"
$RootPath = $PSScriptRoot

if (-not $RootPath) {
    $RootPath = Get-Location
}

Write-Host "==========================================================" -ForegroundColor DarkGreen
Write-Host "  DARUL SUFFAH ONLINE ACADEMY - LOCAL WEB SERVER" -ForegroundColor Yellow
Write-Host "  Learn Quran. Understand Islam. Build Character." -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor DarkGreen
Write-Host "Serving files from : $RootPath" -ForegroundColor Gray
Write-Host "Server listening at: $Prefix" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server.`n" -ForegroundColor Gray

$MimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".ico"  = "image/x-icon"
    ".woff2"= "font/woff2"
    ".xml"  = "application/xml; charset=utf-8"
    ".txt"  = "text/plain; charset=utf-8"
}

$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add($Prefix)

try {
    $Listener.Start()
} catch {
    Write-Warning "Could not bind to $Prefix ($_.Exception.Message). Trying port $($Port + 1)..."
    $Port = $Port + 1
    $Prefix = "http://$HostIP`:$Port/"
    $Listener = New-Object System.Net.HttpListener
    $Listener.Prefixes.Add($Prefix)
    $Listener.Start()
    Write-Host "Server listening at: $Prefix" -ForegroundColor Green
}

# Auto-open browser
Start-Process $Prefix

try {
    while ($Listener.IsListening) {
        $Context = $Listener.GetContext()
        $Request = $Context.Request
        $Response = $Context.Response

        $UrlPath = $Request.Url.LocalPath
        if ($UrlPath -eq "/" -or $UrlPath -eq "") {
            $UrlPath = "/index.html"
        }

        $CleanPath = $UrlPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $FilePath = [System.IO.Path]::Combine($RootPath, $CleanPath)

        if ([System.IO.File]::Exists($FilePath)) {
            $Ext = [System.IO.Path]::GetExtension($FilePath).ToLower()
            $ContentType = $MimeTypes[$Ext]
            if (-not $ContentType) { $ContentType = "application/octet-stream" }

            $Bytes = [System.IO.File]::ReadAllBytes($FilePath)
            $Response.ContentType = $ContentType
            $Response.ContentLength64 = $Bytes.Length
            $Response.StatusCode = 200
            $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
        } else {
            $Response.StatusCode = 404
            $Custom404Path = [System.IO.Path]::Combine($RootPath, "404.html")
            if ([System.IO.File]::Exists($Custom404Path)) {
                $Bytes = [System.IO.File]::ReadAllBytes($Custom404Path)
                $Response.ContentType = "text/html; charset=utf-8"
                $Response.ContentLength64 = $Bytes.Length
                $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
            } else {
                $NotFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Not Found</h1><p>Darul Suffah Online Academy</p>")
                $Response.ContentType = "text/html; charset=utf-8"
                $Response.ContentLength64 = $NotFoundMsg.Length
                $Response.OutputStream.Write($NotFoundMsg, 0, $NotFoundMsg.Length)
            }
        }
        $Response.OutputStream.Close()
    }
} finally {
    $Listener.Stop()
    $Listener.Close()
}
