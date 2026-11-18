# Object Storage

Object storage is an alternative way of thinking about storing files compared to traditional local filesystems.

Unlike local filesystems that organize data into hierarchical folder and directory trees, object storage uses a flat key-value namespace of **buckets** and **objects**.

Here is an example transfer of a folder with a nested folder:

<div class="command-box">
<div class="command-label">COMMAND</div>
<code class="command-text" data-platform="windows"><span class="cmd-bin">snowcopy.exe</span> <span class="cmd-sub">cp</span> <span class="cmd-src">C:\data</span> <span class="cmd-dst">s3://my-bucket</span></code>
<code class="command-text" data-platform="linux"><span class="cmd-bin">snowcopy</span> <span class="cmd-sub">cp</span> <span class="cmd-src">~/data</span> <span class="cmd-dst">s3://my-bucket</span></code>
</div>

{{#include ../../snippets/path-mapping.html}}

<div data-platform="windows">
  <div class="explanation-note">
    <strong>Note:</strong> Windows local paths use backslashes, but S3 object storage keys always use forward slashes. Snowcopy automatically converts between these two styles.
  </div>

</div>

We will dive into the exact command later, but the important part is that we copy the "data" folder to "my-bucket" on the S3 server. Each file becomes an object with a key, that contains the folder and file name in one. Folders do not actually exist as directories in S3 `logs/app.log` is simply an object key name. The slash delimiter is used to convert it back into a folder structure.

Thus, we can go both ways and simplified, a S3 bucket is just the same thing as a large local folder but with a different representation.

<div class="explanation-note">
<Strong>Note: </Strong>A single S3 server can have many buckets. Some S3 systems impose a limit on object count in a bucket. One can expect such a limit to be at least hundreds of thousands of objects.
</div>