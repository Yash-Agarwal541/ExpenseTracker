
$ErrorActionPreference = "Stop"

try {
    $inputJson = [Console]::In.ReadToEnd()
    $event = $inputJson | ConvertFrom-Json

    $toolName = $event.toolName
    if (-not $toolName) {
        $toolName = "Unknown"
    }

    $errorMessage = $event.error
    if (-not $errorMessage) {
        $errorMessage = "No error details provided"
    }

    $logPath = Join-Path $PSScriptRoot "hook-activity.log"

    $logEntry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') | POST_TOOL_USE_FAILURE | $toolName | ERROR: $errorMessage"

    Add-Content -Path $logPath -Value $logEntry

    Write-Output "{}"
}
catch {
    [Console]::Error.WriteLine($_.Exception.Message)
    Write-Output "{}"
}
