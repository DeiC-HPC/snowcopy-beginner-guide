# Exploring server contents

With snowcopy configured, lets see if there are buckets on the remote server by using snowcopy's ls command:

<div data-platform="windows">

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">.\snowcopy.exe ls lumi:</span>
</div>

![](../image/win-ls-buckets.png)

</div>

<div data-platform="linux">

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">./snowcopy ls lumi:</span>
</div>

![](../image/linux-ls-buckets.png)

</div>

This lists the buckets on the server. If it's fresh, then the list would be empty.