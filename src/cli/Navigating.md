# Navigation

Let say that we want to change which directory we are in. This can be done with the "cd" command:

<div data-platform="windows">

![](../image/win-cd.png)

</div>

<div data-platform="linux">

![](../image/linux-cd.png)

</div>

<div data-platform="windows">
The prompt is now "C:\data\some folder".
</div>
<div data-platform="linux">
The prompt is now "~/data/some folder". "~" means your home folder.
</div>

We have now entered "some folder". A very important detail is that because "some folder" contains " ", then we need to encapsulate it in quotes.
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

<div data-platform="windows">

![](../image/win-dir-some-folder.png)

</div>
<div data-platform="linux">

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">ls</span>
</div>

</div>

Great! We have now opened the folder, displayed its contents, but how do we leave again? By doing this:

<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">cd ..</span>
</div>

<div data-platform="windows">

![](../image/win-cd-parent.png)

</div>
<div data-platform="linux">

![](../image/linux-cd-parent.png)

</div>

Now we are back. ".." is special and mean parent folder.
"." is also special, and mean current folder. Using this knowledge, it's possible to combine multiple of the above commands:

<div data-platform="windows">

![](../image/win-cd-layered.png)

Let's break it down:
"." is the current directory, so from "C:\data>" as it's there the command is executed from.
From the current folder, we enter "some folder". This is ".\some folder\".
From "some folder", we go to the parent directory twice, i.e. we go back into "data" and from there to the "C:" drive directly.

Using relative paths also work with "dir". From "C:\" lets display the contents of the inner folder:

![](../image/win-dir-inner-folder.png)

</div>
<div data-platform="linux">

![](../image/linux-cd-layered.png)

Let's break it down:
"." is the current directory, so "~/data" as it's there the command is executed from.
From the current folder, we enter "some folder". This is "./some folder/".
From "some folder", we go to the parent directory twice, i.e. we go back into "data" and from there to the home folder.

Using relative paths also work with "ls". From "~" lets display the contents of the inner folder:

![](../image/linux-ls-inner-folder.png)

</div>

This drives home one of the main points for running commands. The "<Strong>working directory</Strong>" of a program is important. Changing where it executes changes the outcome of the command.

<div data-platform="windows">
Open PowerShell and play around with "cd" and "dir" on your own machine.
</div>
<div data-platform="linux">
Open the terminal and play around with "cd" and "ls" on your own machine.
</div>

<div class="explanation-note">
<Strong>TIP: </Strong>the tab button can be used to autocomplete in the terminal. If one types the beginning of a folder like "som" and presses tab, then it will attempt to autocomplete to "some folder". If there are multiple options, pressing tab again can show them or iterate over them, depending on the terminal.
</div>

What we have used to far are called "relative paths" because the result depends on the start location of the command. It also possible to use absolute paths by specifying it from the root:
<div data-platform="windows">
<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">dir "C:\data\"</span>
</div>
</div>
<div data-platform="linux">
<div class="command-box">
    <div class="command-label">COMMAND</div> <span class="cmd-bin">ls "/home/jon/data/"</span>
</div>
Here "/home/jon" is the home folder shown in the examples. Replace "jon" with your own username to use your home folder.
</div>

This can be executed from any folder, and will always give the same result.

<div data-platform="linux">
The examples on the following pages will use ~/data, which for a given user also always give the same result.
</div>