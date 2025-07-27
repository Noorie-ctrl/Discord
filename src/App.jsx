import backgroundImg from "./assets/images/backgroundImg.webp";
import Header from "./components/Header";
import Main from "./components/Main";
import Button from "./components/Button";
import Section from "./components/Section";
import Cant from "./components/Cant";
import FirstButton from "./components/firstButton";
import FooterImg from "./components/FooterImg";
import Footer from "./components/Footer";
import Reversed from "./components/Reversed";
import Person from "./components/person";


export default function App() {
  return (
    <div
      className=" bg-cover bg-center md:bg-cover md:bg-fixed bg-fixed bg-no-repeat w-full md:w-full md:min-h-screen lg:w-full lg:min-h-screen min-h-screen bg-gradient-to-br from-[#020617] to-[#4c57c4]"
      style={{ 
             backgroundImage: `linear-gradient(to bottom right, #1a2081 , #161cbb), url(${backgroundImg})`,
             backgroundBlendMode: "overlay"
            }}
    >
      <Header />
      <Main />
      <Button />
      <div className="space-y-80 mt-30">
      <Section
      //  backgroundVideo={backgroundImg}
       header ="MAKE YOUR GROUP CHATS MORE FUN"
       paragraph ="Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way."
      
       videoSrc="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-transcode.mp4"
       
       />
      <Reversed
       header ="stream like you’re in the same room"
       paragraph ="High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something."
      //  backgroundImg={backgroundImg} 
       bgColor=" #6b21a8"
        videoSrc ="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763b611120b46189e164b4a_Discord_Website_Refresh_EN-transcode.mp4"
       
      
       />
      <Section
      //  backgroundImg={backgroundImg}
       header ="Hop in when you're free, no need to call"
       paragraph ="Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session."
       bgColor="#9333ea"
       videoSrc="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F683a317f73a44ea577535c09_Homepage_Hop-In_EN-transcode.mp4"
      
       />
      <Reversed 
      // backgroundImg={backgroundImg} 
      header ="See who's around to chill"
       paragraph ="See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up."
       bgColor = "#2dd4bf"
        videoSrc ="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F683a3195524ad05044d126c9_Homepage_AroundToChill_EN-transcode.mp4"
       
      />
       <Person />
      <Section
      //  backgroundImg={backgroundImg}
       header ="always have something to do together"
       paragraph ="Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat."
        bgColor="#3b82f6"
         videoSrc="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763b9f56c9bf69e5e914cd5_Discord_Refresh_Activities_EN-transcode.mp4"
       />
      
      <Reversed
      // backgroundImg={backgroundImg} 
      header ="wherever YOU GAME, HANG OUT HERE"
      paragraph ="On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends."
      bgColor =" #171718ff"
       videoSrc ="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763ba683086419cf7bfb7fb_Discord_Refresh_Platforms-transcode.mp4"
      
       />
       </div>
       <Cant button={<FirstButton />} />
       <FooterImg />
       <Footer  />
    </div>
  );
}
