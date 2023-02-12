export const ecrTitle = `Software Engineer`
export const ecrCompanyName = `Edge Case Research`
export const ecrDuration = `May 2022 - Present`
export const ecrSite = `https://www.ecr.ai/`
export const ecrTask1 = `Collaborated on a cross-functional team of engineers to design and
        implement new features for a web application aimed at ensuring
        autonomous vehicle safety, utilizing Golang on the backend and Vue.js on
        the front-end.`
export const ecrTask2 = `Developed new user-interface features by collaborating with the product
        team, resulting in increased user satisfaction and a smooth user
        experience for end-users.`
export const ecrTask3 = `Leveraged Docker and Kubernetes to optimize and streamline application
        deployments and clusters, leading to reductions in downtime and improved
        system scalability by collaborating with the platform engineering team.`

export const mmaTitle = `Data Analyst`
export const mmaCompanyName = `Marsh & McLennan Agency`
export const mmaDuration = `May 2021 - July 2021`
export const mmaSite = `https://www.marshmclennan.com/`
export const mmaTask1 = `Manipulated data in SQL to develop benchmarking dashboards for use in
        client sales meetings.`
export const mmaTask2 = `Developed Industry Benchmarking Power BI dashboards for use in sales
        pitches to potential clients. Presented dashboards to upper management.`
export const mmaTask3 = `Aggregated data in Salesforce CRM database for 8 major clients, to
        streamline marketing strategies for salespeople.`

export const pipTitle = `Online Trainer`
export const pipCompanyName = `Partner in Publishing`
export const pipDuration = `May 2020 - August 2020`
export const pipSite = `https://www.partnerinpublishing.com/`
export const pipTask1 = `Individually trained more than 250 undergraduate professors to use
        learning management systems such as Canvas.`
export const pipTask2 = `Ranked among top 3 of 25 trainers in customer satisfaction surveys for
        three consecutive months.`
export const pipTask3 = `Wrote Microsoft Excel Macro applications to improve team productivity in
        automated reporting.`

// export these tasks in a list grouped by company
export const ecrTasks = [ecrTask1, ecrTask2, ecrTask3]
export const mmaTasks = [mmaTask1, mmaTask2, mmaTask3]
export const pipTasks = [pipTask1, pipTask2, pipTask3]

export const jobs = {
  ecr: {
    title: ecrTitle,
    companyName: ecrCompanyName,
    duration: ecrDuration,
    tasks: ecrTasks,
    companySite: ecrSite,
  },
  mma: {
    title: mmaTitle,
    companyName: mmaCompanyName,
    duration: mmaDuration,
    tasks: mmaTasks,
    companySite: mmaSite,
  },
  pip: {
    title: pipTitle,
    companyName: pipCompanyName,
    duration: pipDuration,
    tasks: pipTasks,
    companySite: pipSite,
  },
}
