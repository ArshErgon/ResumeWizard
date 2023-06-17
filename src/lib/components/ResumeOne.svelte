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
  let resumeFields = {
    name: false,
    role: false,
    socials: false,
    summary_description: false,
    skills: false,
    job_title: false,
    job_type: false,
    job_date: false,
    job_tech: false,
    job_description: false,
    project_title: false,
    project_date: false,
    project_tech: false,
    project_description: false,
    education_degree: false,
    education_uni_name: false,
    education_place: false,
  };
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
      tech: "Rust • GraphQL",
      description: "• Small points description",
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
    newJob.date = titleCase(newJon.date);
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
    newProject.date = titleCase(newProject.date);
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

  // reactive elements
  $: {
    header.name = titleCase(header.name);
    header.role = titleCase(header.role);
    summary_description = replaceAsterisks(summary_description);
    skills = replaceAsterisks(skills);
    skills = titleCase(skills);
  };
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
            on:focus={() => (resumeFields.name = true)}
            on:blur={() => (resumeFields.name = false)}
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
            on:focus={() => (resumeFields.role = true)}
            on:blur={() => (resumeFields.role = false)}
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
            on:focus={() => (resumeFields.socials = true)}
            on:blur={() => (resumeFields.socials = false)}
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
              on:focus={() => (resumeFields.summary_description = true)}
              on:blur={() => (resumeFields.summary_description = false)}
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
                on:focus={() => (resumeFields.skills = true)}
                on:blur={() => (resumeFields.skills = false)}
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
                on:focus={() => (resumeFields.job_title = true)}
                on:blur={() => (resumeFields.job_title = false)}
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
                on:focus={() => (resumeFields.job_type = true)}
                on:blur={() => (resumeFields.job_type = false)}
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
                on:focus={() => (resumeFields.job_date = true)}
                on:blur={() => (resumeFields.job_date = false)}
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
                on:focus={() => (resumeFields.job_tech = true)}
                on:blur={() => (resumeFields.job_tech = false)}
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
                on:focus={() => (resumeFields.job_description = true)}
                on:blur={() => (resumeFields.job_description = false)}
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
                on:focus={() => (resumeFields.project_title = true)}
                on:blur={() => (resumeFields.project_title = false)}
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
                on:focus={() => (resumeFields.project_date = true)}
                on:blur={() => (resumeFields.project_date = false)}
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
                on:focus={() => (resumeFields.project_tech = true)}
                on:blur={() => (resumeFields.project_tech = false)}
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
                on:focus={() => (resumeFields.project_description = true)}
                on:blur={() => (resumeFields.project_description = false)}
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
                on:focus={() => (resumeFields.education_degree = true)}
                on:blur={() => (resumeFields.education_degree = false)}
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
                on:focus={() => (resumeFields.education_uni_name = true)}
                on:blur={() => (resumeFields.education_uni_name = false)}
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
                on:focus={() => (resumeFields.education_place = true)}
                on:blur={() => (resumeFields.education_place = false)}
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
      <div class="text-center pt-4">Editing Section</div>
      <div class="right-container mt-5">
        {#if sections["header"]}
          <h1
            class="font-semibold font-white"
            style="color: #A6ADBA; border-bottom: 1px solid #A6ADBA;"
          >
            {helper["header"]}
          </h1>
          {#if resumeFields.name}
            <div>
              <em>Pro tip: You can change the color and size of your name.</em>
            </div>
            <p class="ml-5 mt-3"><b>Name:</b> {header.name}</p>
          {:else if resumeFields.socials}
            <p class="ml-5 mt-3"><b>Socials:</b> {header.social}</p>
          {:else if resumeFields.role}
            <p class="ml-5 mt-3"><b>Socials:</b> {header.role}</p>
          {:else}
            <em>Add Some GOOD HEADERS</em>
          {/if}
        {/if}

        {#if sections["summary"]}
          <h1
            class="font-semibold font-white"
            style="color: #A6ADBA; border-bottom: 1px solid #A6ADBA;"
          >
            {helper["summary"]}
          </h1>
          {#if resumeFields.summary_description}
            <em>Pro tip:</em>
            <p class="ml-5 mt-3">
              <b>Description:</b>
              <textarea
              class="textarea textarea-primary w-full w-100"
              placeholder={summary_description}
              rows="5"
              on:focus={() => (resumeFields.summary_description = true)}
              on:blur={() => (resumeFields.summary_description = false)}
              on:input={(event) => {
                if (event.target.value) {
                  summary_description = event.target.value;
                }
              }}
            />
            </p>
          {:else}
            <p class="ml-5 mt-3">ADD IDEAS</p>
          {/if}
        {/if}

        {#if sections["skill"]}
          <h1
            class="font-semibold font-white"
            style="color: #A6ADBA; border-bottom: 1px solid #A6ADBA;"
          >
            {helper["skill"]}
          </h1>
          {#if resumeFields.skills};
            <em>Pro tip: You can change the color and size of your name.</em>
            <p class="ml-5 mt-3"><b>Name:</b> {header.name}</p>
          {:else}
            <em>Add Some GOOD HEADERS</em>
          {/if}
        {/if}

        {#if sections["experience"]}
          <h1
            class="font-semibold font-white"
            style="color: #A6ADBA; border-bottom: 1px solid #A6ADBA;"
          >
            {helper["experience"]}
          </h1>
          {#if resumeFields.job_title}
          <em>Pro tip</em>
          {:else if resumeFields.job_type}
          <em>Pro tip</em>
          {:else if resumeFields.job_date}
          <em>Pro tip</em>
          {:else if resumeFields.job_tech}
          <em>Pro tip</em>
          {:else if resumeFields.job_description}
          <em>Pro tip</em>
          {:else}
          <em>Add SOME GOOD JOB TITLE</em>
          {/if}
        {/if}

        {#if sections["project"]}
          <h1
            class="font-semibold font-white"
            style="color: #A6ADBA; border-bottom: 1px solid #A6ADBA;"
          >
            {helper["project"]}
          </h1>
          {#if resumeFields.project_title}
          <em>Pro tip</em>
          {:else if resumeFields.project_date}
          <em>Pro tip</em>
          {:else if resumeFields.project_tech}
          <em>Pro tip</em>
          {:else if resumeFields.project_description}
          <em>Pro tip</em>
          {:else}
          <em>ADD GOOD EXPERIENCE DESCRIPTION</em>
          {/if}
        {/if}

        {#if sections["education"]}
          <h1
            class="font-semibold font-white"
            style="color: #A6ADBA; border-bottom: 1px solid #A6ADBA;"
          >
            {helper["education"]}
          </h1>
          {#if resumeFields.education_degree}
          <em>Pro tip</em>
          {:else if resumeFields.education_uni_name}
          <em>Pro tip</em>
          {:else if resumeFields.education_place}
          <em>Pro tip</em>
          {:else}
          <em>Add good education details</em>
          {/if}
        {/if}
      </div>

      <button
        class="btn btn-primary mt-10 ml-10"
        onclick="window.print(document.getElementById('leftSideBar').innerHTML);"
        >Print div section</button
      >
    </div>
  </div>
</div>

<style>
  em {
    margin: 15px 15px 0 15px;
    background: red;
  }
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
</style>
