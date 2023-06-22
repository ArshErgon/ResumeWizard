<script>
	import Mobile from './../lib/components/Mobile.svelte';
	import { onMount } from 'svelte';
  let isMobile = false;
  onMount(() => {
  // Check if the user agent indicates a mobile device
  isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(
    navigator.userAgent
  );
});
	import Navbar from './../lib/components/Navbar.svelte';
	import { slide } from 'svelte/transition';
  import "$lib/global.css";
  import Footer from "../lib/components/Footer.svelte";
</script>

<!-- <ResumeOne /> -->
{#if isMobile} 
<Mobile />
{:else}
<main out:slide>
  <Navbar/>
<div class="text-center mt-10 text-[80px] font-[900] text-white">
  Make an outstanding
</div>
<div class="text-center text-[80px] font-[900]"><span>resume</span> for free in minutes.</div>
<div class="text-center text-lg">Showcase yourself and your achievements with our ATS proof online resume generator.</div>
<div class="text-center mt-3"><a href="/resumeOne"><button class="btn btn-secondary">Create your resume</button></a></div>
<br>
<div style="margin: 0 auto;"><img src="
  https://github.com/ArshErgon/ResumeWizard/assets/40994679/1a0248f7-7719-4a88-8f5a-f23f29690b1b" alt="project-gif"></div>
<div class="mt-20 text-center font-[700] text-[36px]">
  Stand out with our resume templates free online resume builder.
</div>
<div class="text-center ml-80 mr-80">More Resume's templates are coming soon.</div>
<div class="text-center mt-20 text-[35px] font-[600]">
  How to use the ResumeWizard
</div>
  <div class="text-center font-[600] text-[35px] pt-10 pb-5">
    Some questions.
  </div>
  <div class="sm:container md:mx-auto pb-10" style="margin: 0px auto; width: 50%;">
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-3"/> 
      <div class="collapse-title text-xl font-medium">
        Will my private information be safe?
      </div>
      <div class="collapse-content"> 
        <p>Your private information is safe at ResumeWizard. We never store your data, so all the information you share with us will stay inside your browser until you hit refresh or exit the website. We understand that you may be concerned about the security of your information. We want to assure you that we take your privacy very seriously. We will never sell or share your information with third parties as we never save your data.</p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-3" /> 
      <div class="collapse-title text-xl font-medium">
        Do I need to sign up or pay to download my resume from ResumeWizard?
      </div>
      <div class="collapse-content"> 
        <p>No, you do not need to sign up or pay to download your resume from ResumeWizard. ResumeWizard is a free online resume builder, so you can create and download your resume as many times as you like.</p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-3" /> 
      <div class="collapse-title text-xl font-medium">
        Is it open source?
      </div>
      <div class="collapse-content"> 
        <p>ResumeWizard is an open source website, which means that anyone can contribute to the project. If you have any skills in web development, design, or documentation, we would love to have your help.
          <br>
          You can find out more about contributing to ResumeWizard on our GitHub repository. <a href="https://github.com/ArshErgon/ResumeWizard/" target="_blank"></a></p>
      </div>
    </div>
  </div>
<br /><br /><br />
<Footer />
</main>
{/if}
<style>
span {
  background-color: #f3ec78;
    background-image: linear-gradient(45deg, #2270c9, #dd0b47);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
}

img {
  margin: 0px auto;
  /* width: 30%; */

}

</style>