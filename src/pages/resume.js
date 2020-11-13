import Head from 'next/head';

const Resume = (props) => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <body>
        <section className="section">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-8">
                <p className="title is-size-1"><strong>Hendra Ng</strong></p>
                <p className="subtitle is-size-4">Software Engineer</p>
              </div>
              <div className="column">
                <button class="button is-dark is-pulled-right">
                  <a href="/Resume_HendraNg.pdf" target="blank">Resume PDF</a>
                  </button>
              </div>
            </div>
          </div>
        </section>
        <section className="section py-4">
          <div className="container">
            <div className="title is-size-4">Summary</div>
            <div className="content">
              <ul>
                <li>Highly motivated software developer with 14+ years industry experience and a sincere passion for resolving software development and business challenges.</li>
                <li>A solid problem solver with ability to quickly grasp complex systems and identify opportunities
                        for improvements.</li>
                <li>Outstanding analysis, programming, and debugging capabilities in web application development.
                    </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section py-4">
          <div className="container">
            <div className="title is-size-4">Technical Skills</div>
            <div className="columns">
              <div className="column">
                <ul>
                  <li className="mb-2">C#</li>
                  <li className="mb-2">.NET MVC</li>
                  <li className="mb-2">Web API</li>
                  <li className="mb-2">HTML</li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li className="mb-2">Angular</li>
                  <li className="mb-2">TypeScript</li>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">SQL</li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li className="mb-2">CSS</li>
                  <li className="mb-2">Java</li>
                  <li className="mb-2">TFS</li>
                  <li className="mb-2">Git</li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li className="mb-2">Atlassian</li>
                  <li className="mb-2">Azure</li>
                  <li className="mb-2">Pivotal Cloud Foundry</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section py-4">
          <div className="container">
            <div className="title is-size-4">Experience</div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  Senior Manager Risk Analytics/Modeling (Lead Developer), Model Risk Oversight
                    </div>
                <div className="subtitle is-size-5">
                  Charles Schwab, Lone Tree, CO
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                April 2019 - Present
                </div>
            </div>
            <div className="content">
              <ul>
                <li>Develop MIGraph application providing model owners with comprehensive model registration solutions.</li>
                <li>Design and develop MITools supporting validators and QAQC team with model inventory check.</li>
                <li>As Scrum Master, lead daily stand-up and ensure team delivery commitments.</li>
                <li>Field technical questions from developers and leadership, including Continuous Integration and Delivery (CI/CD).</li>
                <li>Initiate and improve unit test effort on MIGraph and MITools.</li>
                <li>Research and implement feature tests on MIGraph.</li>
                <li>Actively participate in code reviews and act as a mentor/coach to team.</li>
                <li>Assist and support lead validators with minor validations and technical questions.</li>
              </ul>
            </div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  Software Developer Associate Manager, Mortgage Cadence
                    </div>
                <div className="subtitle is-size-5">
                  Accenture - Denver, CO
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                August 2018 - April 2019
                </div>
            </div>
            <div className="content">
              <ul>
                <li>Investigate and resolve bugs in Enterprise Lending Center application (ELC).</li>
                <li>Work with other team members to design, develop, and tests new features for ELC application.</li>
                <li>Field technical questions from other developers, product management, quality assurance, and other departments.</li>
                <li>Research new software development concepts and make suggestions for improvement.</li>
                <li>Actively participate in code reviews.</li>
                <li>Document conceptual and technical designs.</li>
              </ul>
            </div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  Senior Software Applications Engineer (Tech Lead), Treasury and Securities Lending
                    </div>
                <div className="subtitle is-size-5">
                  Charles Schwab, Lone Tree, CO
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                April 2017 - August 2018
                </div>
            </div>
            <div className="content">
              <ul>
                <li>Led Securities Lending team of five on projects to implement new or enhance existing functionalities.</li>
                <li>Collaborated with product owner, technical director, and business to design and develop functionalities.</li>
                <li>Created proof of concept applications as samples for junior developers and/or demo to staff and management.</li>
                <li>Provided crisp and well-understood directives and communication to all levels of staff and management.</li>
                <li>Participated, led, and promoted the Dev Core Agile Scrum team.</li>
                <li>Tracked and managed dependencies across lines of business and platforms.</li>
                <li>Worked collaboratively as a team player to develop mutually acceptable solutions, and act as a mentor to team.</li>
              </ul>
            </div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  IT Senior Programmer, Enterprise Resource Organization (ERO)
                    </div>
                <div className="subtitle is-size-5">
                  Progressive Insurance - Colorado Springs, CO
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                August 2006 - April 2017
                </div>
            </div>
            <div className="content">
              <ul>
                <li>Led enterprise e-sign API project delivering solid application infrastructure that communicates with internal client and DocuSign.</li>
                <li>Selected as a Tech Lead directing local programmers and QA testers delivering Home Quote 2 project.</li>
                <li>Wrote or modified code for software application development using detailed design documents.</li>
                <li>Selected as 2015 Summer Intern Manager managing interns.</li>
                <li>Mentored and coached more than 5 new programmers under ERO.</li>
                <li>Part of 10 programmer to work on high priority Direct Mobile Tablet project.</li>
                <li>Promoted from Programmer level 2 in 2007 to Programmer level 3 (senior) in 2009.</li>
                <li>Selected as Flash Quoting Release Owner making sure team of 17-person rolled out 6 states.</li>
                <li>Selected as Bunker West primary migration lead to migrate F2.5 application.</li>
                <li>Researched and analyzed business technical functionalities and needs to code systems enhancements using C#.</li>
                <li>Used troubleshooting skills to determine appropriate programming solutions for production issues.</li>
                <li>Created and executed unit, development, and manual QA test plans to ensure code quality.</li>
                <li>Prepared documentation needed throughout the software application development and/or modification processes.</li>
                <li>Developed tools to automate the creation and maintenance of data using Excel Macro.</li>
              </ul>
            </div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  Software Engineer Intern, CDMA Mobility Manager Team
                    </div>
                <div className="subtitle is-size-5">
                  Motorola Inc. - Chandler, AZ
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                May 2005 - December 2005
                </div>
            </div>
            <div className="content">
              <ul>
                <li>Developed Perl script to collect automated tested log files for performance subsystem test team.</li>
                <li>Using Perl created scripts that supported the performance subsystem test team prior to automation testing.</li>
                <li>Created Excel report using VBA summarizing the test of call results.</li>
                <li>Assisted the system engineering team in creating Perl script to compare UML design between two releases of mobility manager.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section py-4">
          <div className="container">
            <div className="title is-size-4">Education</div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  Master of Engineering in Computer Science
                    </div>
                <div className="subtitle is-size-5">
                  University of Colorado at Boulder
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                December 2012 (3.9 GPA)
                </div>
            </div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  Bachelor of Science in Computer Science
                    </div>
                <div className="subtitle is-size-5">
                  Arizona State University
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                December 2005 (3.71 GPA)
                </div>
            </div>
          </div>
        </section>
        <section className="section py-4">
          <div className="container">
            <div className="title is-size-4">Certifications</div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  Certified Scaled Agile Framework (SAFe) 4 Practitioner
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                May 2020
                </div>
            </div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9 ">
                <div className="title is-size-5">
                  Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                January 2016
                </div>
            </div>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-9">
                <div className="title is-size-5">
                  Software Engineering Certificate
                    </div>
                <div className="subtitle is-size-5">
                  University of Colorado at Boulder
                    </div>
              </div>
              <div className="column is-3 title is-size-5">
                May 2011
                </div>
            </div>
          </div>
        </section>
        <section className="section py-4">
          <div className="container">
            <div className="title is-size-4">Projects</div>
          </div>
          <div className="container">
            <div className="content">
              <ul>
                <li><strong>MITools:</strong> Lead MRO QAQC team developing MITools weekly run application checking model inventory fields. This application helps validators identifying data related issues that may violate SR11-7 and/or MRO Governance guidelines. Result: About 11 thousand data related issues have been reduced to roughly 1500. This ongoing effort shows Federal Reserve on MRO’s initiative/effort achieving no data issue goal.</li>
                <li><strong>Short Sale Automation:</strong> Led Securities Lending project providing daily securities’ short sale rate to Digital Service team, which would then be distributed to the front channels (schwab.com, street smart, and client central). This was the first project taking advantage of .Net Web API and Rabbit MQ on Pivotal Cloud Foundry. Result: Better customer experience by providing hard to borrow securities’ rates without having to call customer representatives.</li>
                <li><strong>Home Quote 2:</strong> Technical Lead for member of 12-person team expanding Progressive business to homeowners offering better selections of home and condo insurance. Goal: Enhancing Progressive’s ability to grow together with the expanding customers’ families (customer retention).</li>
                <li><strong>Unified Quoting Architecture Implementation:</strong> Member of 30-person team rolling out next version of Direct Tablet/Auto Quoting using AngularJS, ASP .NET MVC, JQuery, and Sass. Result: Better quoting experience for customers.</li>
                <li><strong>Talk to Me:</strong> Integrated Talk to Me feature into Direct Auto Quoting .NET MVC architecture using JQuery (AJAX). Result: Better customer service quality by having the ability to assist customer faster with their quotes.</li>
                <li><strong>Direct Auto Quoting:</strong> Member of 20-person team rolling out Auto Quoting Mobile Tablet using ASP .NET MVC, JQuery, and Sass. Result: customers had more options to quote.</li>
                <li><strong>Sunset Classic:</strong> Member of 7-person team migrating and refactoring Online Servicing application code from classic ASP into C#. Result: more maintainable and better performance application.</li>
                <li><strong>Flash Quoting:</strong> Member of 17-person team rolled out flash based quoting application to more US states improving customer experience. Result: great customer experience feedback resulted in more policies in force.</li>
                <li><strong>Production Support Blitz:</strong> Member of 10-person team resolved approximately 400 production issues with different priorities in four months. Result: zero production issue at the end of 2006. Progressive’s production issue number (all priorities) had not been more than 50 since early 2007 to 2010.</li>
                <li><strong>Feature Manager Reporting:</strong> Created features reporting on Progressive Feature Manager’s website giving summary to developers on currently available features on each environment (development, test, acceptance, and production). Result: one stop user interface for developers to identify all available features for each environment (time saver).</li>
              </ul>
            </div>
          </div>
        </section>
      </body>
    </>
  )
}

export default Resume;