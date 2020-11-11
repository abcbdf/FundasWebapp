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
        {pageName: "StartPage", label: "Take the image from left"},
        {pageName: "ImageTakenPage", label: "Take the image from left"},
        {pageName: "StartPage", label: "Take the image from right"},
        {pageName: "ImageTakenPage", label: "Take the image from right"},
        {pageName: "StartPage", label: "Take the image from bottom"},
        {pageName: "ImageTakenPage", label: "Take the image from bottom"},
        {pageName: "StartPage", label: "Take the image from top"},
        {pageName: "ImageTakenPage", label: "Take the image from top"},
        {pageName: "StartPage", label: "Take the image from center"},
        {pageName: "ImageTakenPage", label: "Take the image from center"},
        {pageName: "ImageStitchPage", label: "Stitch images"},
        {pageName: "SavePage", label: "All done"},
      ],
      currentNum: 0,
      progressBarMaxStep: 0,
      progressBarCurrentStep: 1,
      progressBarLabel: "",
    }
  },
  methods:{
    nextPage()
    {
      this.currentNum += 1;
      this.currentNum = this.currentNum % this.stateMachine.length;
      router.push(this.stateMachine[this.currentNum].pageName);
      
      this.updateInfo();


    },
    updateInfo()
    {
      let theme = this.pageInfo[this.stateMachine[this.currentNum].pageName].theme;
      if (theme === "dark")
      {
        this.app.color = "blue darken-4";
        this.app.showProgressBar = true;
        this.progressBarMaxStep = 7;
        this.progressBarCurrentStep = Math.floor((this.currentNum - 3) / 2) + Math.floor(this.currentNum / 14);
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