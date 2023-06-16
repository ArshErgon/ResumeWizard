<script>
  // @ts-nocheck

  import { titleCase, replaceAsterisks } from "./helper.js";

  let header = {
    name: "John Bose",
    role: "Software Developer",
    social:
      "https:://github.com • https://www.linkedin.com • https://example.com",
  };

  let summary_description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus natus iusto alias adipisci? Vel rem corrupti atque, facere laudantium delectus ab! Quia, possimus quibusdam fuga sequi rem perspiciatis quas omnis!";
  let skills = "Rust • Python • JavaScript • Svelte";
  let job = {
    title: "",
    type: "",
    date: "",
    tech: "",
    description: "",
  };

  let projects = {
    title: "",
    date: "",
    link: "",
    tech: "",
    description: "",
  };

  let education = {
    degree: "",
    university: "",
    place: "",
  };

  // Some helpers for user

  let helper = {
    header: "Header",
    summary: "Summary",
    skill: "Skills",
    experience: "Experience",
    project: "Projects",
    education: "Education",
  };

  //   accordion checker

  // SECTIONS
  let sections = {
    header: false,
    summary: false,
    skill: false,
    experience: false,
    project: false,
    education: false,
  };

  // HEADER CHECKER
  function handleFocus() {
    console.log("WORKING");
  }

  // for work_experience dummyData
  let work_experience_list = [
    {
      title: "Open Source Developer",
      type: "Full Time",
      date: "20 Jan 2022-Present",
      tech: "CSS • HTML • Rust",
      description: "• Some random experience for the user",
    },
  ];

  let project_list = [
    {
      title: "ProjectOne",
      date: "1 Jan 2023 - Present",
      link: "gogole.com",
      tech: "rust • graphql",
      description: "• small points description",
    },
  ];

  //

  let education_list = [
    {
      degree: "Bachlores In Computer Science, 2023",
      university: "Oxford",
      place: "England, London",
    },
  ];

  let hasEditWork = false;
  function addMoreExperience() {
    let newJob = { ...job };
    newJob.title = titleCase(newJob.title);
    newJob.type = titleCase(newJob.type);
    newJob.description = replaceAsterisks(newJob.description);
    work_experience_list = [...work_experience_list, newJob];
    if (!hasEditWork) {
      work_experience_list.shift();
      hasEditWork = !hasEditWork;
    }
    job["title"] = "";
    job["date"] = "";
    job["type"] = "";
    job["tech"] = "";
    job["description"] = "";
  }

  let hasEditProject = false;
  function addMoreProject() {
    let newProject = { ...projects };
    newProject.title = titleCase(newProject.title);
    newProject.description = replaceAsterisks(newProject.description);
    newProject.tech = replaceAsterisks(newProject.tech);
    project_list = [...project_list, newProject];
    if (!hasEditProject) {
      project_list.shift();
      hasEditProject = !hasEditProject;
    }
    // rechange the value
    projects["title"] = "";
    projects["date"] = "";
    projects["link"] = "";
    projects["tech"] = "";
    projects["description"] = "";
  }

  let hasEditEducation = false;
  function addMoreEducation() {
    let newEducation = { ...education };
    newEducation.degree = titleCase(newEducation.degree);
    newEducation.university = titleCase(newEducation.university);
    newEducation.place = titleCase(newEducation.place);
    education_list = [...education_list, newEducation];
    // rechange the value
    if (!hasEditEducation) {
      education_list.shift();
      hasEditEducation = !hasEditEducation;
    }
    education["degree"] = "";
    education["university"] = "";
    education["place"] = "";
  }
</script>

<div class="flex flex-col w-full lg:flex-row" id="main_view">
  <div
    class="grid flex-grow h-100 card bg-base-300 rounded-box"
    id="leftSideBar"
  >
    <div class="h-30" id="accordion">
      <div class="collapse bg-base-200 collapse-arrow">
        <input type="checkbox" bind:checked={sections["header"]} />
        <div class="collapse-title text-xl font-medium">Header</div>
        <div class="collapse-content">
          <label for="Name">Name: </label><input
            type="text"
            placeholder={header.name}
            class="input input-bordered input-primary w-full w-100"
            on:focus={handleFocus}
            on:input={(event) => {
              if (event.target.value) {
                header.name = event.target.value;
              }
            }}
          />
          <br />
          <label for="role">Role: </label><input
            type="text"
            placeholder={header.role}
            class="input input-bordered input-primary w-full w-100"
            on:input={(event) => {
              if (event.target.value) {
                header.role = event.target.value;
              }
            }}
          />
          <br />
          <label for="role">Socials: </label><input
            type="text"
            placeholder={header.social}
            class="input input-bordered input-primary w-full w-100"
            on:input={(event) => {
              if (event.target.value) {
                header.social = event.target.value;
              }
            }}
          />
        </div>

        <div class="collapse bg-base-200 collapse-arrow">
          <input type="checkbox" bind:checked={sections["summary"]} />
          <div class="collapse-title text-xl font-medium">Summary</div>
          <div class="collapse-content">
            <label for="Name">Summary description: </label><textarea
              class="textarea textarea-primary w-full w-100"
              placeholder={summary_description}
              rows="5"
              on:input={(event) => {
                if (event.target.value) {
                  summary_description = event.target.value;
                }
              }}
            />
          </div>
          <div class="collapse bg-base-200 collapse-arrow">
            <input type="checkbox" bind:checked={sections["skill"]} />
            <div class="collapse-title text-xl font-medium">Skills</div>
            <div class="collapse-content">
              <label for="Name">Skills: </label><input
                type="text"
                placeholder={skills}
                class="input input-bordered input-primary w-full w-100"
                on:input={(event) => {
                  if (event.target.value) {
                    skills = event.target.value;
                  }
                }}
              />
            </div>
          </div>

          <div class="collapse bg-base-200 collapse-arrow">
            <input type="checkbox" bind:checked={sections["experience"]} />
            <div class="collapse-title text-xl font-medium">
              Work Experience
            </div>
            <div class="collapse-content">
              <label for="Name">Job Title: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={job.title}
                on:input={(event) => {
                  if (event.target.value) {
                    job.title = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Job Type: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={job.type}
                on:input={(event) => {
                  if (event.target.value) {
                    job.type = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Date: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={job.date}
                on:input={(event) => {
                  if (event.target.value) {
                    job.date = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Tech Stack: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={job.tech}
                on:input={(event) => {
                  if (event.target.value) {
                    job.tech = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Job Description: </label><textarea
                type="text"
                row="3"
                class="input input-bordered input-primary w-full w-100 w-full w-100"
                bind:value={job.description}
                on:input={(event) => {
                  if (event.target.value) {
                    job.description = event.target.value;
                  }
                }}
              />
              <button class="btn btn-primary" on:click={addMoreExperience}
                >Add Experience</button
              >
            </div>
          </div>
          <div class="collapse bg-base-200 collapse-arrow">
            <input type="checkbox" bind:checked={sections["project"]} />
            <div class="collapse-title text-xl font-medium">Projects</div>
            <div class="collapse-content">
              <label for="Name">Project Title: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={projects.title}
                on:input={(event) => {
                  if (event.target.value) {
                    projects.title = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Date: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={projects.date}
                on:input={(event) => {
                  if (event.target.value) {
                    projects.date = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Tech: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={projects.tech}
                on:input={(event) => {
                  if (event.target.value) {
                    projects.tech = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Project description: </label><textarea
                class="input input-bordered input-primary w-full w-100"
                rows="5"
                bind:value={projects.description}
                on:input={(event) => {
                  if (event.target.value) {
                    projects.description = event.target.value;
                  }
                }}
              />
              <button class="btn btn-primary" on:click={addMoreProject}
                >Add Project</button
              >
            </div>
          </div>
          <div class="collapse bg-base-200 collapse-arrow">
            <input type="checkbox" bind:checked={sections["education"]} />
            <div class="collapse-title text-xl font-medium">Education</div>
            <div class="collapse-content">
              <label for="Name">Degree: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={education.degree}
                on:input={(event) => {
                  if (event.target.value) {
                    education.degree = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">University Name: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={education.university}
                on:input={(event) => {
                  if (event.target.value) {
                    education.university = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Place: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={education.place}
                on:input={(event) => {
                  if (event.target.value) {
                    education.place = event.target.value;
                  }
                }}
              />
              <button class="btn btn-primary" on:click={addMoreEducation}
                >Add Education</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="divider lg:divider-horizontal" />
  <div
    class="grid flex-grow card bg-base-300 rounded-box place-items-center"
    id="page"
  >
    <div class="resumeBg" id="resumeBg">
      <div class="text-center mt-4 text-[40px] text-black font-bold">
        {header.name}
      </div>
      <p class="text-center text-xs" style="margin: -4px 0 4px 0;">
        {header.role}
      </p>
      <div class="text-center" id="socials">
        {header.social}
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
        {#each work_experience_list as experience}
          <div
            class="mt-1"
            style="display: flex; justify-content: space-between;"
          >
            <div id="title" style="order: 1;">{experience.title}</div>
            <div class="mr-4 text-black" style="order: 2;">
              {experience.date}
            </div>
          </div>
          <div class="text-black ml-5">{experience.type}</div>
          <div class="text-black ml-5" id="tech_stack">
            <b>Technology:</b>
            {experience.tech}
          </div>
          <div class="ml-5 mr-4 text-black">
            {experience.description}
          </div>
        {/each}
      </div>

      <div id="projects">
        <h1>Projects</h1>
        {#each project_list as project}
          <div
            class="mt-1"
            style="display: flex; justify-content: space-between;"
          >
            <div id="title" style="order: 1;">{project.title}</div>
            <div class="mr-4 text-black" style="order: 2;">{project.date}</div>
          </div>
          <div class="text-black ml-5">{project.link}</div>
          <div class="text-black ml-5" id="tech_stack">
            <b>Technology: </b>{project.tech}
          </div>
          <div class="ml-5 mr-4 text-black">
            {project.description}
          </div>
        {/each}
      </div>

      <div class="">
        <h1>Education</h1>
        {#each education_list as education}
          <div id="title">{education.degree}</div>
          <div class="text-black ml-5">{education.university}</div>
          <div class="text-black ml-5">{education.place}</div>
        {/each}
      </div>
    </div>
  </div>
  <div class="divider lg:divider-horizontal" />
  <div class="grid flex-grow h-50 w-20 card bg-base-300 rounded-box">
    <div class="h-30" id="right-accordion">
      <div class="text-center">Right Section</div>
      <div class="right-container mt-5">
        ...
        {#if sections["header"]}
          {helper["header"]}
          <h1>HELLOW</h1>
        {/if}
        {#if sections["summary"]}
          {helper["summary"]}
          <h1>HELLOW</h1>
        {/if}
        {#if sections["skill"]}
          {helper["skill"]}
          <h1>HELLOW</h1>
        {/if}
        {#if sections["experience"]}
          {helper["experience"]}
          <h1>HELLOW</h1>
        {/if}
        {#if sections["project"]}
          {helper["project"]}
          <h1>HELLOW</h1>
        {/if}
        {#if sections["education"]}
          {helper["education"]}
          <h1>HELLOW</h1>
        {/if}
      </div>
      <!--     
    <button
      class="btn btn-primary mt-10"
      onclick="window.print(document.getElementById('leftSideBar').innerHTML);"
      >Print div section</button
    > 
  -->
    </div>
  </div>
</div>

<style>
  input {
    margin-bottom: 10px;
  }
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
  .right-container {
    background: red;
    width: 90%;
    margin-top: -80px;
  }
</style>
