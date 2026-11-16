# Navigation

Let say that we want to change which directory we are in. This can be done with the "cd" command:

<div data-platform="windows">

![](../image/win-cd.png)

The prompt is now  "C:\data\some folder". We have now entered "some folder". A very important detail is that because "some folder" contains " ", then we need to encapsulate it in quotes.
Imagine the folder was called "some-folder" instead, then one could do:

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">cd some-folder</span>
</div>

Instead of:

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">cd "some folder"</span>
</div>

which is why many people prefer to use names without space when working in the command prompt. Parameters to programs are separated by space, so without quotes the cd would interpret the command as cd "some" "folder", instead of a single parameter.

Let's investigate the current folder:

![](../image/win-dir-some-folder.png)

Great! We have now opened the folder, displayed its contents, but how do we leave again? By doing this:

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">cd ..</span>
</div>

![](../image/win-cd-parent.png)

Now we are back. ".." is special and mean parent folder.
"." is also special, and mean current folder. Using this knowledge, it's possible to combine multiple of the above commands:

![](../image/win-cd-layered.png)

Let's break it down:
"." is the current directory, so from "C:\data>" as it's there the command is executed from.
From the current folder, we enter "some data". This is ".\some data\".
From "some data", we go to the parent directory twice, i.e. we go back into "data" and from there to the "C:" drive directly.

Using relative paths also work with "dir". From "C:\" lets display the contents of the inner folder:

![](../image/win-dir-inner-folder.png)

This drives home one of the main points for running commands. The "<Strong>working directory</Strong>" of a program is important. Changing where it executes changes the outcome of the command.

Open powershell and play around with "cd" and "dir" on your own machine.

<div class="explanation-note">
<Strong>TIP: </Strong>the tab button can be used to autocomplete in the terminal. If one types the beginning of a folder like "som" and presses tab, then it will attempt to autocomplete to "some folder". One can press tab again to iterate over the options, if there are multiple.
</div>

What we have used to far are called "relative paths" because the result depends on the start location of the command. It also possible to use absolute commands by specifying it from the root of the drive:
<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">dir "C:\data\"</span>
</div>

This can be executed from any folder, and will always give the same result.

</div>

<div data-platform="linux">
TODO

![](../image/placeholder.png)

</div>