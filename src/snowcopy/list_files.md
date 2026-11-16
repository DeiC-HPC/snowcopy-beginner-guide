# List files

Let's explore our new bucket to confirm that its contents is as we expect.

<div data-platform="windows">

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">.\snowcopy.exe ls lumi:data-bucket</span>
</div>

![](../image/win-ls-bucket-content.png)

</div>

<div data-platform="linux">

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">./snowcopy ls lumi:data-bucket</span>
</div>

![](../image/placeholder.png)


</div>

This displays the contents of data-bucket.

Recall that each file is mapped to an object:

{{#include ../../snippets/path-mapping.html}}

We have two files in C:\data\ and they are listed in the bucket. Since we transferred the contents of data, there is no mention of the data folder.