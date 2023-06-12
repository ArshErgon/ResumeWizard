<script>
// @ts-nocheck

  let name = "John Bose";
  let role = "Software Developer";
  let social = "github, youtube, linkedin, and more";
  let summary_description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus natus iusto alias adipisci? Vel rem corrupti atque, facere laudantium delectus ab! Quia, possimus quibusdam fuga sequi rem perspiciatis quas omnis!";
  let skills = "Rust * Pokemon * extra things";
  let job_type = "Full-time";
  let tech_stack = "technology: CSS HTML Rust";
  let exp_desp =
    "* Some random sentenses which is used by many other guys present in the sentenses";
</script>

<div class="flex flex-col w-full lg:flex-row">
  <div
    class="grid flex-grow h-100 card bg-base-300 rounded-box"
    id="leftSideBar"
  >
    <div class="h-30">
      <div class="collapse bg-base-200 collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Header</div>
        <div class="collapse-content">
          <label for="Name">Name: </label><input
            type="text"
            placeholder={name}
            class="input input-bordered input-primary w-full max-w-xs"
            on:input={(event) => {
              if (event.target.value) {
                name = event.target.value;
              }
            }}
          />
          <br>
          <label for="role">Role: </label><input
          type="text"
          placeholder={role}
          class="input input-bordered input-primary w-full max-w-xs"
          on:input={(event) => {
            if (event.target.value) {
              role = event.taret.value;
            }
          }}
        />
        <br>
          <label for="role">Socials: </label><input
          type="text"
          placeholder={social}
          class="input input-bordered input-primary w-full max-w-xs"
          on:input={(event) => {
            if (event.target.value) {
              social = event.target.value;
            }
          }}
        />
        </div>
      </div>
      <div class="collapse bg-base-200 collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Summary</div>
        <div class="collapse-content">
          <label for="Name">Summary description: </label><textarea
          placeholder={summary_description}
          class="input input-bordered input-primary w-full max-w-xs"
          rows="5"
          on:input={(event) => {
            if (event.target.value) {
              summary_description = event.target.value;
            }
          }}
        ></textarea>
        
        </div>
        <div class="collapse bg-base-200 collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Skills</div>
        <div class="collapse-content">
          <label for="Name">Skills: </label><input
          type="text"
          placeholder={skills}
          class="input input-bordered input-primary w-full max-w-xs"
          on:input={(event) => {
            if (event.target.value) {
              skills = event.target.value;
            }
          }}
        />
        
        </div>
      </div>
      
    </div>
    </div>

    <!-- <input type="text" name="" id="" placeholder="{name}"on:input={(event) => {
            if (event.target.value) {
              name = event.target.value;
            }
          }} /> -->
  </div>
  <div class="divider lg:divider-horizontal" />
  <div
    class="grid flex-grow card bg-base-300 rounded-box place-items-center"
    id="page"
  >
    <div id="resumeBg">
      <div class="text-center mt-4 text-[40px] text-black font-bold">
        {name}
      </div>
      <p class="text-center text-xs" style="margin: -4px 0 4px 0;">{role}</p>
      <div class="text-center" id="socials">
        {social}
      </div>
      <div class="" id="summary">
        <h1>Summary</h1>
        <div id="description">{summary_description}</div>
      </div>

      <div class="" id="skills">
        <h1>Skills</h1>
        <div id="description">{skills}</div>
      </div>

      <div class="" id="work_experience">
        <h1>Work Experience</h1>
        <div
          class="mt-1"
          style="display: flex; justify-content: space-between;"
        >
          <div id="title" style="order: 1;">Open Source Developer</div>
          <div class="mr-4 text-black" style="order: 2;">20 Jan</div>
        </div>
        <div class="text-black ml-5">{job_type}</div>
        <div class="text-black ml-5" id="tech_stack">{tech_stack}</div>
        <div class="ml-5 mr-4 text-black">
          {exp_desp}
        </div>
      </div>

      <div id="projects">
        <h1>Projects</h1>
        <div
          class="mt-1"
          style="display: flex; justify-content: space-between;"
        >
          <div id="title" style="order: 1;">ProjectName</div>
          <div class="mr-4 text-black" style="order: 2;">20 Jan</div>
        </div>
        <div class="text-black ml-5">{job_type}</div>
        <div class="text-black ml-5" id="tech_stack">{tech_stack}</div>
        <div class="ml-5 mr-4 text-black">
          {exp_desp}
        </div>
      </div>

      <div class="">
        <h1>Education</h1>
        <div id="title">Bachlores</div>
        <div class="text-black ml-5">University Name</div>
        <div class="text-black ml-5">Place</div>
      </div>
    </div>
  </div>
  <div class="divider lg:divider-horizontal" />
  <div
    class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
  >
    RightSideBar
  </div>
</div>

<style>
  #leftSideBar {
    width: 10%;
  }

  #page {
    width: 30%;
  }

  #resumeBg {
    margin: 15px;
    background: white;
    height: 29.7cm;
    width: 21cm;
  }
  #socials {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: -5px;
  }

  h1 {
    border-bottom: 1px solid black;
    font-size: 25px;
    color: black;
    margin: 5px 15px 0 15px;
  }

  #description {
    color: black;
    margin: 3px 20px 0 20px;
    overflow-wrap: break-word;
  }

  #title {
    color: black;
    font-weight: bolder;
    margin: 3px 0 0 20px;
    font-size: 15pt;
  }
</style>
