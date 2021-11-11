# reveal.js-animate
Integration of the animation library [animate.css](https://animate.style/) to reveal.js

Animate the childNodes of each slide identifying them by html tag (tagName).
They are written in capital letters as: H1, H2, ...., H6, TABLE, IMG, DIV, P, OL, UL etc.

3 parameters are used:
- **Animation type:** animated.
- **Speed:** speed.
- **Times it is executed:** repeat.

Check out the [live demo](https://antoniofregoso.github.io/reveal.js-animate)

## Animate.css 
The animate.css library must be installed
```
$ npm install animate.css --save
```
and call from your local location
```HTML
    <link rel="stylesheet" href="static/node_modules/animate.css/animate.css">
```
You can also call it externally by the CDN
```HTML
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>

```

### Animations
Add any of these animations in the "animated" parameter:
- **Attention seekers:** bounce, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat.
- **Back entrances:** backInDown, backInLeft, backInRight, backInUp.
- **Back exits:** backOutDown, backOutLeft, backOutRight, backOutUp.
- **Bouncing entrances:** bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp.
- **Bouncing exits:** bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp.
- **Fading entrances:** fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeInTopLeft, fadeInTopRight, fadeInBottomLeft, fadeInBottomRight.
- **Fading exits:** fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, fadeOutTopLeft, fadeOutTopRight, fadeOutBottomRight, fadeOutBottomLeft.
- **Flippers:** flip, flipInX, flipInY, flipOutX, flipOutY
- **Lightspeed:** lightSpeedInRight, lightSpeedInLeft, lightSpeedOutRight, lightSpeedOutLeft.
- **Rotating entrances:** rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight.
- **Rotating exits:** rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight
- **Specials:** hinge, jackInTheBox, rollIn, rollOut.
- **Zooming entrances:** zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp.
- **Zooming exits:** zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp.
- **Sliding entrances:** slideInDown, slideInLeft, slideInRight, slideInUp.
- **Sliding exits:** slideOutDown, slideOutLeft, slideOutRight, slideOutUp.
### Speed
Select the speed, if omitted it will select the default speed of 1s.

- **2 sec.:** slow.
- **3 Sec.:** slower.
- **800ms.:** fast.
- **500ms.:** faster.

### Repeating
Select the repetitions, by default it is 1 time if you omit the parameter.

- **Repeat once:** repeat-1.
- **Repeat once:** repeat-2.
- **Repeat three times:** repeat-3.
- **Repeat infinitely:** infinite.

## Installation
Download and install the package in your project:
```
$ npm install reveal.js-animate --save
```
## Configuration
```javascript
import RevealAnimate from './animate.esm.js';

  Reveal.initialize({
    plugins: [ RevealAnimate ]
  });

```



## Global Setting
```javascript
Reveal.initialize({
  // ...
 animated: {
      'H1':{'animated':'slideInDown'},
      'IMG':{'animated':'backInDown', 'repeat': 'repeat-2', 'speed':'slower'},
      'P':{'animated':'bounceInRight', 'speed':'fast'},
      'UL':{'animated':'jello', 'repeat': 'infinite', 'speed':'slower'}
    },
});
```
## Manual Setting

```html

<h1 data-animated="backInDown">Hello! I'm animated.</h1>

<p data-animated="zoomInLeft" data-repeat="repeat-2"  data-speed="slower">I am a slowly animated paragraph</p>

```
## License

MIT licensed

Copyright (C) 2021 Antonio Fregoso, https://antoniofregoso.com