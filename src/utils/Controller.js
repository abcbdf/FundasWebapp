import router from '@/router';
import Vue from 'vue';

// class Controller
// {
//   constructor()
//   {
//     this.pageInfo = {
//       StartPage: {theme: "dark"},
//       ImageTakenPage: {theme: "dark"},
//       ImageStitchPage: {theme: "dark"},
//       SavePage: {theme: "dark"},
//       VerifyPage: {theme: "light"},
//       ChooseEyePage: {theme: "light"},
//       TurnOffLightPage: {theme: "light"},
//     };
//     this.stateMachine = [
//       {pageName: "VerifyPage"},
//       {pageName: "ChooseEyePage"},
//       {pageName: "TurnOffLightPage"},
//       {pageName: "StartPage", label: "Take the image from bottom"},
//       {pageName: "ImageTakenPage", label: "Take the image from bottom"},
//       {pageName: "ImageStitchPage", label: "Stitch images"},
//       {pageName: "SavePage", label: "All done"},
//     ]
//     this.currentNum = 0;
//   }
//   nextPage()
//   {
//     this.currentNum += 1;
//     this.currentNum = this.currentNum % this.stateMachine.length;
//     router.push(this.stateMachine[this.currentNum].pageName);
    
//     this.updateInfo();


//   }
//   updateInfo()
//   {
//     let theme = this.pageInfo[this.stateMachine[this.currentNum].pageName].theme;
//     if (theme === "dark")
//     {
//       this.app.color = "blue darken-4";
//       this.app.showProgressBar = true;
//       this.progressBarMaxStep = 4;
//       this.progressBarCurrentStep = this.currentNum - 3;
//       this.progressBarLabel
//       console.log("controller: " + this.progressBarCurrentStep);
//     }
//     else if (theme === "light")
//     {
//       this.app.color = "white";
//       this.app.showProgressBar = false;
//     }
//     else
//     {
//       console.log("wrong page theme");
//     }
    
//   }
// }

const controller = new Vue({
  data () {
    return {
      serverUrl: "http://localhost:3000/public/",
      pageInfo: {
        StartPage: {theme: "dark"},
        ImageTakenPage: {theme: "dark"},
        ImageStitchPage: {theme: "dark"},
        SavePage: {theme: "dark"},
        VerifyPage: {theme: "light"},
        ChooseEyePage: {theme: "light"},
        TurnOffLightPage: {theme: "light"},
      },
      stateMachine: [
        {pageName: "VerifyPage"},
        {pageName: "ChooseEyePage"},
        {pageName: "TurnOffLightPage"},
        {pageName: "StartPage", label: "Take the image from left", step: 0},
        {pageName: "ImageTakenPage", label: "Take the image from left", step: 0},
        {pageName: "StartPage", label: "Take the image from right", step: 1},
        {pageName: "ImageTakenPage", label: "Take the image from right", step: 1},
        {pageName: "StartPage", label: "Take the image from bottom", step: 2},
        {pageName: "ImageTakenPage", label: "Take the image from bottom", step: 2},
        {pageName: "StartPage", label: "Take the image from top", step: 3},
        {pageName: "ImageTakenPage", label: "Take the image from top", step: 3},
        {pageName: "StartPage", label: "Take the image from center", step: 4},
        {pageName: "ImageTakenPage", label: "Take the image from center", step: 4},
        {pageName: "ImageStitchPage", label: "Stitch images", step: 5},
        {pageName: "SavePage", label: "All done", step: 6},
      ],
      currentNum: 0,
      progressBarMaxStep: 7,
      progressBarCurrentStep: 1,
      progressBarLabel: "",
    }
  },
  methods:{
    nextPage()
    {
      if (router.history.current.name == "VerifyPage")
      {
        this.currentNum = 0;
      }
      this.currentNum += 1;
      this.currentNum = this.currentNum % this.stateMachine.length;
      router.push({name: this.stateMachine[this.currentNum].pageName});
      
      this.updateInfo();


    },
    updateInfo()
    {
      let theme = this.pageInfo[this.stateMachine[this.currentNum].pageName].theme;
      if (theme === "dark")
      {
        this.app.color = "blue darken-4";
        this.app.showProgressBar = true;
        // this.progressBarMaxStep = 7;
        // this.progressBarCurrentStep = Math.floor((this.currentNum - 3) / 2) + Math.floor(this.currentNum / 14);
        this.progressBarCurrentStep = this.stateMachine[this.currentNum].step;
        this.progressBarLabel = this.stateMachine[this.currentNum].label;
        // console.log("controller: " + this.progressBarLabel);
      }
      else if (theme === "light")
      {
        this.app.color = "white";
        this.app.showProgressBar = false;
      }
      else
      {
        console.log("wrong page theme");
      }
      
    }
  },
  
});

// function nextPage()
// {
//   controller.nextPage();
// }

export default controller;