# Upload files

Let's upload the data folder that we were working with earlier. 

<div data-platform="windows">

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">.\snowcopy.exe cp C:\data lumi:data-bucket</span>
</div>

![](../image/win-upload.png)

</div>

<div data-platform="linux">

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">./snowcopy cp /data lumi:data-bucket</span>
</div>

</div>

This uploads the contents of data into the new data-bucket.

<div class="explanation-note">
    <Strong>Note: </Strong> snowcopy automatically creates the bucket if it does not exist prior to the copy.
</div>