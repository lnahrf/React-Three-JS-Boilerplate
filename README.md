# React JS + Three JS Boilerplate <img src="https://theconsoleblog.com/wp-content/uploads/2021/01/three-js-symbol-png.png" width="35" align="right" href="#"/>  <img src="https://theconsoleblog.com/wp-content/uploads/2020/12/1280px-React-icon-e1609508110908.png" width="35" align="right" href="#"/>

The first time I tried running a Three JS Scene on a React project I encountered a couple of problems until I eventually got the shtick of it, I hope this article and repository will save some developers a couple of precious hours.

You can either clone my boilerplate and start working from there or you can follow my guide on how to start a basic React + Three project from scratch.

[Read the complete walkthrough and explanation of this boilerplate on The Console Blog&nbsp;&nbsp;
<img src="https://theconsoleblog.com/wp-content/uploads/2021/01/the_console_blog_logo.png" width="120"/>
](https://theconsoleblog.com/react-js-three-js-boilerplate/)


Like it and want to support me? [<img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5cbee341ae2b8813ae072f5b_Ko-fi_logo_RGB_Outline.png" width="20"/> Buy me a coffee!](https://ko-fi.com/theconsoleblog)


# Using the boilerplate
 **Step 1** Clone the repo 
 ```
 git clone https://github.com/tk-ni/React-JS-Three-JS-Boilerplate.git
```

**Step 2** In the main repo directory open a CMD/Terminal and type in these commands.

```
npm install
npm start
```

The boilerplate includes a basic project structure and basic scene <i>**MainScene.component.js**</i> already imported in App.js.

Feel free to modify/copy/replace the MainScene component or anything else to fit your project's needs.

The boilerplate's folder structure follows the basic CRA template structure with a few modifications.

> - public <br>
> - src
>   - Assets ```- Store all your 3D Models/Textures/Graphics.```
>   - Components ```- Store all your React/3D components (that aren't scenes).```
>   - Scenes ```- Store all your scenes React components. ```
>   - Styles ```- Store all your CSS/SASS files. ```
>   - App.js
>   - index.js


---
## Update - 1.1 
Added a loading manager functionality to the MainScene component. <br>
Turn loading mode on using loading props, e.g.
```jsx
export default class App extends React.Component{
  render(){
    return(<>
    <MainScene loading={true}/>
    </>)
  }
}
```
To modify the actual loading screen, edit the ***Loading.component.js*** in ```src/Components``` and ***loading.css*** in ```src/Styles```.

---
## Update - 1.2
Added handle window resize functionality..
To add this functionality to other scenes, import handleResize from ```src/Utils/screenResize.js ```.
```javascript
import {handleSceneResize, initEventListener} from './../Utils/sceneResize';
```
Add this code before the animation loop of every scene to handle window resizing.
```javascript
//init Handle Resize
handleSceneResize(window, camera, renderer, composer);
initEventListener(window);
```
***<span style="color:orange">window</span>*** refers to the global window object. <br>
***<span style="color:orange">camera*** refers to the camera the scene currently uses. <br>
***<span style="color:orange">renderer*** refers to the current renderer instance. <br>
***<span style="color:orange">composer*** (optional) refers to the current composer instance. <br>

To modify how Three JS scenes handle window resizing, edit the ***sceneResize.js*** file in ```src/Utils/screenResize.js ```

---
If you have any questions or comments, feel free to contact me!