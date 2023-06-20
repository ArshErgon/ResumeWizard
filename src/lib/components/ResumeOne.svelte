<script>
  // @ts-nocheck

  import { titleCase, replaceAsterisks } from "./helper.js";
  import { onMount } from "svelte";

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

  // to change the font-weight
  let defaultWeight = 0;
  function handleWeight(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.style.fontWeight = `${value}`;
  }

  // to change the fontSize
  let fontSize = 0;
  function handleFontSize(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.style.fontSize = `${value}px`;
  }
  let fontColor = "";
  function handleColorChange(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.style.color = `${value}`;
  }

  let marginTop = 0;
  function handleMarginTop(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.style.marginTop = `${value}px`;
  }

  let marginBottom = 0;
  function handleMarginBottom(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.style.marginBottom = `${value}px`;
  }

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
  let nowPresent = [];
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
  function handleFields() {
    if (nowPresent.length == 2) {
      let [first, last] = [nowPresent.shift(), nowPresent[0]];
      if (first != last) {
        resumeFields[first] = false;
      } else {
        nowPresent.shift();
      }
    }
  }
  onMount(() => {
    const inputFields = document.querySelectorAll("input, textarea");
    inputFields.forEach((input) => {
      input.addEventListener("focus", handleFields);
    });
  });

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
    newJob.date = titleCase(newJob.date);
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
    header.social = replaceAsterisks(header.social);
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
            on:focus={() =>
              (resumeFields.name = true && nowPresent.push("name"))}
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
            on:focus={() =>
              (resumeFields.role = true && nowPresent.push("role"))}
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
            on:focus={() =>
              (resumeFields.socials = true && nowPresent.push("socials"))}
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
              on:focus={() =>
                (resumeFields.summary_description =
                  true && nowPresent.push("summary_description"))}
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
                on:focus={() =>
                  (resumeFields.skills = true && nowPresent.push("skills"))}
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
                on:focus={() =>
                  (resumeFields.job_title =
                    true && nowPresent.push("job_title"))}
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
                on:focus={() =>
                  (resumeFields.job_type = true && nowPresent.push("job_type"))}
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
                on:focus={() =>
                  (resumeFields.job_date = true && nowPresent.push("job_date"))}
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
                on:focus={() =>
                  (resumeFields.job_tech = true && nowPresent.push("job_tech"))}
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
                class="input input-bordered input-primary w-100 w-full w-100"
                bind:value={job.description}
                on:focus={() =>
                  (resumeFields.job_description =
                    true && nowPresent.push("job_description"))}
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
                on:focus={() =>
                  (resumeFields.project_title =
                    true && nowPresent.push("project_title"))}
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
                on:focus={() =>
                  (resumeFields.project_date =
                    true && nowPresent.push("project_date"))}
                on:input={(event) => {
                  if (event.target.value) {
                    projects.date = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Link: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={projects.link}
                on:focus={() =>
                  (resumeFields.project_link =
                    true && nowPresent.push("project_link"))}
                on:input={(event) => {
                  if (event.target.value) {
                    projects.link = event.target.value;
                  }
                }}
              />
              <br />
              <label for="Name">Tech: </label><input
                type="text"
                class="input input-bordered input-primary w-full w-100"
                bind:value={projects.tech}
                on:focus={() =>
                  (resumeFields.project_tech =
                    true && nowPresent.push("project_tech"))}
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
                on:focus={() =>
                  (resumeFields.project_description =
                    true && nowPresent.push("project_description"))}
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
                on:focus={() =>
                  (resumeFields.education_degree =
                    true && nowPresent.push("education_degree"))}
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
                on:focus={() =>
                  (resumeFields.education_uni_name =
                    true && nowPresent.push("education_uni_name"))}
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
                on:focus={() =>
                  (resumeFields.education_place =
                    true && nowPresent.push("education_place"))}
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
      <div
        class="text-center mt-4 text-[40px] text-black font-bold"
        id="header-name"
      >
        {header.name}
      </div>
      <p
        class="text-center text-xs"
        style="margin: -4px 0 4px 0;"
        id="header-role"
      >
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
      <div class="mt-5">
        {#if sections["header"]}
          <h1
            class="font-semibold font-white"
            style="color: #A6ADBA; border-bottom: 1px solid #A6ADBA;"
          >
            {helper["header"]}
          </h1>

          {#if resumeFields.name}
            <div id="em-div">
              <em>Pro tip: You can change the color and size of your name.</em>
            </div>
            <br />
            <div class="form-control w-30 ml-3 mr-10">
              <label class="label">
                <span class="label-text">Font Size</span>
              </label>
              <input
                type="range"
                min="20"
                max="70"
                bind:value={fontSize}
                class="range"
                on:input={() => handleFontSize("header-name", fontSize)}
              />
            </div>
            <div class="form-control w-30 ml-3 mr-10">
              <label class="label">
                <span class="label-text">Font Weight</span>
              </label>
              <input
                type="range"
                min="100"
                max="900"
                bind:value={defaultWeight}
                class="range"
                on:input={() => handleWeight("header-name", defaultWeight)}
              />
            </div>
            <div class="form-control w-30 ml-3 mr-10">
              <label class="label">
                <span class="label-text">Font Color</span>
              </label>
              <input
                type="color"
                bind:value={fontColor}
                class="range"
                on:input={() => handleColorChange("header-name", fontColor)}
              />
            </div>
          {:else if resumeFields.role}
            <p class="ml-5 mt-3"><b>Role:</b> {header.role}</p>
            <div class="form-control w-30 ml-3 mr-10">
              <label class="label">
                <span class="label-text">Font Size</span>
              </label>
              <input
                type="range"
                min="12"
                max="40"
                bind:value={fontSize}
                class="range"
                on:input={() => handleFontSize("header-role", fontSize)}
              />
            </div>
            <div class="form-control w-30 ml-3 mr-10">
              <label class="label">
                <span class="label-text">Font Weight</span>
              </label>
              <input
                type="range"
                min="100"
                max="900"
                bind:value={defaultWeight}
                class="range"
                on:input={() => handleWeight("header-role", defaultWeight)}
              />
            </div>
            <div class="form-control w-30 ml-3 mr-10">
              <label class="label">
                <span class="label-text">Font Color</span>
              </label>
              <input
                type="color"
                bind:value={fontColor}
                class="range"
                on:input={() => handleColorChange("header-role", fontColor)}
              />
            </div>
            <div class="form-control w-30 ml-3 mr-10">
              <label class="label">
                <span class="label-text">Margin Top</span>
              </label>
              <input
                type="range"
                min="0"
                max="30"
                bind:value={marginTop}
                class="range"
                on:input={() => handleMarginTop("header-role", marginTop)}
              />
            </div>
            <div class="form-control w-30 ml-3 mr-10">
              <label class="label">
                <span class="label-text">Margin Bottom</span>
              </label>
              <input
                type="range"
                min="0"
                max="30"
                bind:value={marginBottom}
                class="range"
                on:input={() => handleMarginBottom("header-role", marginBottom)}
              />
            </div>
          {:else if resumeFields.socials}
          <div class="form-control w-30 ml-3 mr-10">
            <label class="label">
              <span class="label-text">Font Size</span>
            </label>
            <input
              type="range"
              min="12"
              max="40"
              bind:value={fontSize}
              class="range"
              on:input={() => handleFontSize("socials", fontSize)}
            />
          </div>
          <div class="form-control w-30 ml-3 mr-10">
            <label class="label">
              <span class="label-text">Font Weight</span>
            </label>
            <input
              type="range"
              min="100"
              max="900"
              bind:value={defaultWeight}
              class="range"
              on:input={() => handleWeight("socials", defaultWeight)}
            />
          </div>
          <div class="form-control w-30 ml-3 mr-10">
            <label class="label">
              <span class="label-text">Font Color</span>
            </label>
            <input
              type="color"
              bind:value={fontColor}
              class="range"
              on:input={() => handleColorChange("socials", fontColor)}
            />
          </div>
          <div class="form-control w-30 ml-3 mr-10">
            <label class="label">
              <span class="label-text">Margin Top</span>
            </label>
            <input
              type="range"
              min="0"
              max="30"
              bind:value={marginTop}
              class="range"
              on:input={() => handleMarginTop("socials", marginTop)}
            />
          </div>
          <div class="form-control w-30 ml-3 mr-10">
            <label class="label">
              <span class="label-text">Margin Bottom</span>
            </label>
            <input
              type="range"
              min="0"
              max="30"
              bind:value={marginBottom}
              class="range"
              on:input={() => handleMarginBottom("socials", marginBottom)}
            />
          </div>
          {:else}
            <div id="em-div">
              <em>Start filling details so that you can use editing tools</em>
            </div>
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
            <div id="em-div">
              <em>Pro tip:</em>
            </div>
            <p class="ml-5 mt-3">
              <b>Description:</b>
              <textarea
                class="textarea textarea-primary w-full w-100"
                placeholder={summary_description}
                rows="5"
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
            <div id="em-div">
              <em>Pro tip: You can change the color and size of your name.</em>
            </div>
            <p class="ml-5 mt-3"><b>Skills:</b> {skills}</p>
          {:else}
            <div id="em-div">
              <em>Add Some GOOD HEADERS</em>
            </div>
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
            <div id="em-div">
              <em>Pro tip JT</em>
            </div>
          {:else if resumeFields.job_type}
            <div id="em-div">
              <em>Pro tip JTY</em>
            </div>
          {:else if resumeFields.job_date}
            <div id="em-div">
              <em>Pro tip JD</em>
            </div>
          {:else if resumeFields.job_tech}
            <div id="em-div">
              <em>Pro tip JTH</em>
            </div>
          {:else if resumeFields.job_description}
            <div id="em-div">
              <em>Pro tip JDPT</em>
            </div>
          {:else}
            <div id="em-div">
              <em>Add SOME GOOD JOB TITLE</em>
            </div>
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
            <div id="em-div">
              <em>Pro tip PT</em>
            </div>
          {:else if resumeFields.project_date}
            <div id="em-div">
              <em>Pro tip PD</em>
            </div>
          {:else if resumeFields.project_tech}
            <div id="em-div">
              <em>Pro tip PTH</em>
            </div>
          {:else if resumeFields.project_description}
            <div id="em-div">
              <em>Pro tip PDS</em>
            </div>
          {:else}
            <div id="em-div">
              <em>ADD GOOD EXPERIENCE DESCRIPTION</em>
            </div>
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
            <div id="em-div">
              <em>Pro tip D</em>
            </div>
          {:else if resumeFields.education_uni_name}
            <div id="em-div">
              <em>Pro tip UND</em>
            </div>
          {:else if resumeFields.education_place}
            <div id="em-div">
              <em>Pro tip DP</em>
            </div>
          {:else}
            <div id="em-div">
              <em>Add good education details</em>
            </div>
          {/if}
        {/if}
      </div>
      <div class="flex flex-col items-center justify-center">
        <button
          class="btn btn-secondary mt-10 text-center justify-center"
          onclick="window.print(document.getElementById('leftSideBar').innerHTML);"
          >Print/Save</button
        >
      </div>
    </div>
  </div>
  <div class="btm-nav" id="btm-nav">
    <button class="text-info active" id="btm-nav-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        /></svg
      >
    </button>
  </div>
</div>

<style>
  #header-name {
    font-weight: lighter;
  }
  #btm-nav {
    width: 10%;
    display: flex;
    margin: 0px auto;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  #btm-nav-button {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  #em-div {
    display: flex;
    width: 380px;
    margin: 0px auto;
  }

  em {
    margin: 10px 15px 0 15px;
    padding: 0px 0px 3px 0px;
    border-bottom: 1px solid #f5d300;
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
