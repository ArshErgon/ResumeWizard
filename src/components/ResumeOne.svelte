<script>
  let name = "John Smith";
  let socials = "facebook";
  let summary = "summary";
  let skills = "number of skills are present here";
  let job_title = "programmer";
  let job_date = "date of job";
  let job_type = "type of job";
  let job_tech = "tech of job";
  let job_description = "description of job";
  let pro_name = "name of pro";
  let pro_date = "date of pro";
  let pro_tech = "tech of pro";
  let pro_des = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsum tempora possimus ut ullam debitis quam eligendi molestias tempore! Vitae, fuga facilis veritatis sed reiciendis eum aliquam beatae aliquid ullam.";
  let degree_name = "degree";
  let degree_school_name = "degree_school";
  let degree_location = "degree_location";
</script>

<div class="container-fluid">
  <div class="top-name">
    <p>{name}</p>
    <br />
  </div>
  <div class="social-container">
    <span class="socials">
      {socials}
    </span>
  </div>
  <div class="summary">
    <div class="resume-heading">Summary</div>
    <div class="description">
      {summary}
    </div>
  </div>

  <div class="skills">
    <div class="resume-heading">Skills</div>
    <div class="description" id="skills">
      {skills}
    </div>
  </div>

  <div class="work-experience">
    <div class="resume-heading">Work Experience</div>
    <!-- job title one -->
    <div class="title-one">
      <div style="display: flex;justify-content: space-between;">
        <div class="job-title" style="order: 1;">{job_title}</div>
        <div class="date" style="order: 2;">{job_date}</div>
      </div>
      <div class="job-type">{job_type}</div>
      <div class="tech-stack">{job_tech}</div>
      <div class="description">
        {job_description}
      </div>

      <div style="display: flex;justify-content: space-between;">
        <div class="job-title" style="order: 1;">Programmer</div>
        <div class="date" style="order: 2;">Jan to Dec</div>
      </div>
      <div class="job-type">Full Time</div>
      <div class="tech-stack">technology: something crispy</div>
      <div class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsum
        tempora possimus ut ullam debitis quam eligendi molestias tempore!
        Vitae, fuga facilis veritatis sed reiciendis eum aliquam beatae aliquid
        ullam.
      </div>
    </div>
  </div>
  <div class="projects">
    <div class="resume-heading">Projects</div>
    <div style="display: flex;justify-content: space-between;">
      <div class="project-name" style="order: 1;">{pro_name}</div>
      <div class="date" style="order: 2;">{pro_date}</div>
    </div>
    <div class="tech-stack">{pro_tech}</div>
    <div class="description">
      {pro_des}
    </div>
  </div>
  <div class="education">
    <div class="resume-heading">Education</div>
    <div class="education-level">{degree_name}</div>
    <div class="education-right">
      <div class="school-name">{degree_school_name}</div>
      <div class="school-name">{degree_location}</div>
    </div>
    <div class="education-level">Masters</div>
    <div class="school-name">random school name</div>
    <div class="school-name">random place name</div>
  </div>
</div>

<style>
  .container-fluid {
    width: 95%;
    height: 98%;
    margin: 10px auto;
  }
  .top-name p {
    padding-top: 30px;
    font-size: 3rem;
    font-weight: bolder;
    text-align: center;
    color: rgb(0, 0, 0);
  }

  .summary {
    margin-top: 40px;
  }

  .description {
    color: black;
    margin: 3px 10px 0px 1.3pc;
  }

  .social-container {
    width: 80%;
    text-align: center;
    margin: -10px auto;
    color: #000;
  }

  .resume-heading {
    font-size: 1.5rem;
    padding: 0 0 5px 10px;
    color: black;
    border-bottom: 2px solid black;
    font-family: Cardo;
    margin-top: 15px;
  }

  .job-title {
    margin: 5px 8px 0px 1pc;
    color: black;
  }
  .date {
    color: black;
    margin: 5px 8px 0px 1pc;
  }
  .job-type {
    color: black;
    margin: 3px 8px 0px 1pc;
    font-size: small;
  }
  .tech-stack {
    margin: 3px 8px 0px 1pc;
    font-size: 15px;
    color: black;
    font-weight: bolder;
  }

  .project-name {
    margin: 3px 8px 0px 1pc;
    color: black;
  }

  .education-level {
    color: black;
    margin: 5px 8px 0px 1pc;
    font-weight: bolder;
  }
  .school-name {
    color: black;
    margin: -3px 8px 0px 1pc;
  }

  .education-right {
    margin-right: 10px;
  }
</style>