# TOP-Etch-A-Sketch

## Summary of Functionality

During the first iteration we are going to be using a grid of 16x16.

"Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!"
-TOP

You can use flex-box if you want but this might be the perfect time to dabble in CSS 
grid since some projects in the future may require the knowledge anyway. 

"Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail
through your grid like a pen would. " -TOP

My inital thoughts are that I will be adding classes in the script but maybe we can shift the colors in a purely programatic sense...?

What I mean is maybe we can do: *page has event listener for hover* >> *script executes shift to pseudo-class* >> 
*color changes on event trigger*. These are just some thoughts that I have.

## Timeline / Plan Of Action

1. Figure out a method to add the grid to the page using JS only. 
    1. It's highly probable that we will need to use an alternative to the flexbox method although that will be tried first.
    2. If that doesn't agree with the DOM methods I understand then CSS grid will be researched and implemented.
2. Decide on implementation mehtodology for the hover aspect of the functionality. Changing the colors is simple but they must
change only on hover. 
3. Once the hover/filling functionallity is set then we can add the button to initilize the page.
    1. There is mention of getting the user to put how ever many cells they would like in a *set* space for the page. This may
need to be worked out sooner than later.