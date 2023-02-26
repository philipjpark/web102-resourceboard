import React from "react";
import Card from './Card';
import skills from '/src/assets/images/skills.png'
import success from '/src/assets/images/success.png'
import resume from '/src/assets/images/resume.png'
import internships from '/src/assets/images/internships.png'
import network from '/src/assets/images/network.png'
import behavior from '/src/assets/images/behavior.png'
import interview from '/src/assets/images/interview.png'
import salary from '/src/assets/images/salary.png'
import track from '/src/assets/images/track.png'
import learn from '/src/assets/images/learn.png'
import web from '/src/assets/images/web.png'
import senior from '/src/assets/images/senior.png'

const Shell = () => {

    return (
        <div className="Shell">
            <Card img={success} title='Success Checklist' 
                description='The road to success begins with planning and organizing. Dive into the Success Checklist to see how to start your trek!' 
                link={'https://books.codepath.org/student-handbook/success-checklist/'}/>
            <Card img={skills} title='Skills and Knowledge' 
                description='Tech is all about continuous learning, and relevant means you have to build on your skill-sets and knowledge. Hop into see what core skills and knowledge you need to set a great foundation.' 
                link={'https://books.codepath.org/student-handbook/'}/>
            <Card img={resume} title='Resume Checklist' 
                description='Resumes is your pitch to a world of employers. Learn to put your best foot forward by checking all the boxes to a perfect resume.' 
                link={'https://docs.google.com/document/d/1TDGkSD5l--GjKu56jw6frHmjr075QHbr_wfma_gmv8s/edit#heading=h.a6zf6udxi9hp/'}/>
            <Card img={internships} title='Finding Internship & Roles' 
                description='Internships are your way to step into the “real-world” and outside of an academic setting. Jump right into to learn about how to find internships and roles that can set your career on the right path.' 
                link={'https://books.codepath.org/student-handbook/internship-and-job-search-strategy/finding-roles'}/>
            <Card img={network} title='Network Guides and Templates' 
                description='Networking allows you to learn more about the industry and to make connections that can help you find the right job. Figure out how to connect beyond LinkedIn and formulate the right strategy to network properly.' 
                link={'https://docs.google.com/document/d/1BehKTrQWek7J2Q5Lq53hE_jUOiZbyToS3CORMg15ZOE/edit'}/>
            <Card img={behavior} title='Behavioral Interview Worksheet' 
                description='Employers want to know what you bring to table. Are you going to be pushing the company forward or holding them back? Leave an impression that showcases your well-roundedness and not just your programming skills. ' 
                link={'https://docs.google.com/document/d/1ferHwQBVCVAzl44WjF4XMxX9xulqY3vyYwkXEt5ZK4A/edit#heading=h.gjdgxs'}/>
            <Card img={interview} title='Studying for Tech Interviews' 
                description='Algorithms are hard but they are the industry litmus test. The rite of passage of tech interviews can be mastered; find out how.' 
                link={'https://books.codepath.org/student-handbook/technical-interviewing/studying-for-tech-interviews'}/>
            <Card img={salary} title='Salary Negotiation Guide' 
                description='Once you get the job of your dreams, find out how to get the salary that will keep you in la-la land.' 
                link={'https://docs.google.com/document/d/1Zw6gUnajdLK8SGpcz8GL0EFqfNl24BLbTkjUKa7NWTc/edit'}/>
            <Card img={track} title='Software Career Tracks' 
                description='A career is what you make of it. Find the right path in Software and Tech.' 
                link={'https://books.codepath.org/student-handbook/software-engineering/software-career-tracks'}/>
            <Card img={learn} title='Learning Computer Science' 
                description='Comp sci is broad and expanding. Like the universe needed a big bang; you need this guide to get you moving full steam ahead in tech!' 
                link={'https://books.codepath.org/student-handbook/bonus/learning-cs-online'}/>
            <Card img={web} title='Diving into Web Dev' 
                description='If you are reading this right now… you really need to head on in because web devs will always be in demand… ChatGPT has got nothing on the creativity of the human touch of a polished web dev.' 
                link={'https://books.codepath.org/student-handbook/domain-specific/diving-into-web-development'}/>
            <Card img={senior} title='On Becoming a Senior Engineer' 
                description='Move up the ladder. Read this and you will be able to climb up the ladder faster. ' 
                link={'https://books.codepath.org/student-handbook/software-engineering/on-becoming-a-senior-engineer'}/>
        </div>
    )
  
}

export default Shell;