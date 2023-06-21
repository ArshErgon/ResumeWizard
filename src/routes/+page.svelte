<script>
	import Navbar from './../lib/components/Navbar.svelte';
	import { slide } from 'svelte/transition';
  import "$lib/global.css";
  import Footer from "../lib/components/Footer.svelte";
</script>

<!-- <ResumeOne /> -->

<main out:slide>
  <Navbar/>
<div class="text-center mt-10 text-[80px] font-[900] text-white">
  Make an outstanding
</div>
<div class="text-center text-[80px] font-[900]"><span>resume</span> for free in minutes.</div>
<div class="text-center text-lg">Showcase yourself and your achievements with our ATS proof online resume generator.</div>
<div class="text-center mt-3"><a href="/resumeOne"><button class="btn btn-secondary">Create your resume</button></a></div>
<br>
<div style="background: red; width: 900px; height: 500px;margin: 0 auto;"></div>
<div class="mt-20 text-center font-[700] text-[36px]">
  Stand out with our resume templates free online resume builder.
</div>
<div class="text-center ml-80 mr-80">More Resume's templates are coming soon.</div>
<div class="text-center mt-20 text-[35px] font-[600]">
  How to use the ResumeWizard
</div>
<br /><br /><br />
<Footer />
</main>

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
</style>