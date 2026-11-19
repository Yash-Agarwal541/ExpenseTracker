
$ErrorActionPreference = "Stop"

try {
    $inputJson = [Console]::In.ReadToEnd()
    $event = $inputJson | ConvertFrom-Json

    $toolName = $event.toolName

    if (-not $toolName) {
        $toolName = "Unknown"
    }

    $logPath = Join-Path $PSScriptRoot "hook-activity.log"

    $logEntry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') | PRE_TOOL_USE | $toolName"

    Add-Content -Path $logPath -Value $logEntry

    Write-Output "{}"
}
catch {
    [Console]::Error.WriteLine($_.Exception.Message)
    Write-Output "{}"
}
