import React from "react";
import { CiSearch } from "react-icons/ci";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import phone from "../assets/phone.jpg";
import software from "../assets/software.jpg";


export const Home = () =>{
    return(
        <>  
            <section id="home-1">
            <div className="main-container">
                <div className="main-home">
                    <h1 className="home-h1"><span className="free">Free</span> Trademark Public Search Online</h1>
                    <p className="home-p">Use Vakil Dekho's proprietary online search algorithm to check your brand name availability.</p>
                    <div className="main-form">
                        <form action="" className="styles-form-section">
                            <div className="search-icon"><CiSearch/></div>
                            <input className="text-inp" type="text" placeholder="Search your brand name here" />
                            <button className="search-btn">Search now</button>
                        </form>
                    </div>
                    <div className="styles-popularOptions">
                        <div className="styles-popularContainer">
                            <p>Popular:</p>
                            <Link to="/">Trademark Registration</Link>
                            <Link to="/">Copyright Registration</Link>
                            <Link to="/">Patent Registration</Link>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section className="price">
                <div className="main-price-container">
                    <p className="main-title">
                        <b>Beyond Free Search: </b>
                        Trademark Security with Expert Lawyers
                    </p>
                    <p className="sub-title">Related articles</p>
                </div>
                <div className="option-container">
                    <div className="article-container">
                        <div className="aricle-img">
                            <img src={phone} alt="" />
                        </div>
                        <div className="article-content">
                            <h3>How to protect a mobile app with a trademark</h3>
                            <p>People all over the world are using smartphones and tablets. As mobile app usage grows in popularity, the number...</p>
                        </div>
                    </div>
                    <div className="article-container">
                        <div className="aricle-img">
                            <img src={software} alt="" />
                        </div>
                        <div className="article-content">
                            <h3>12 good reasons for software companies to register a trademark</h3>
                            <p>There is a myriad of reasons why trademark registration is of a crucial importance for software companies.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="faq">
                <div className="faq-main">
                    <h2 className="pt-5">
                        What is a Trademark Search?
                    </h2>
                    <div className="pt-4">
                        A trademark search is a strategy for your business's marketing toolkit. This search, often called a TM search, allows you to discover trademarks already used within the market and obtain detailed information about them. Moreover, it enables you to determine if there are any ongoing attempts to <a href="https://vakilsearch.com/ipindia/trademark-registration"> register a trademark</a> that might infringe on your brand name or other related identifiers.
                    </div>
                    <div className="pt-4">
                        We will thoroughly analyze your brand name, logo, and design to safeguard your unique identity. We compare these elements against extensive databases of registered trademarks. These registries catalogue registered trademarks in their databases. Consequently, if another party attempts to register a trademark identical or similar to your brand identity, they must pay a specified fee before their registration process can proceed. This step is crucial to prevent unauthorized usage and potential infringement of your brand.
                    </div>
                </div>
                <div className="faq-sub">
                    <h2 className="pt-5">How to Conduct a Trademark IP India Public Search?</h2>
                    <div className="pt-4">Trademark searches are especially important if you are searching for a trademark that is registered with the trademark registry. But before you start your search, it's important to know how to conduct a trademark search online. There are many different ways in which you can conduct a tm search, but below are two of the most common ways:</div>
                
                <ul className="pt-4">
                    <li className="pb-2">Searching for a trademark online If you’re looking for information about an existing trademark, conducting an online search is by far your best option</li>
                    <li className="pb-2">The first step in conducting an online search is to conduct a keyword search on trademarks or brands that you believe might be similar to yours</li>
                    <li className="pb-2">If the name entered doesn't match anything within your given search parameters, move on to </li>
                    <li className="pb-2"> In order to find out if the name is on file with the trademark registry, check the Indian government’s trademark registry or perform a </li>
                    <li className="pb-2">Sometimes these databases will provide some insight into whether or not another company has filed for protection of their brand name against your use of yours as well
                    </li>
                    <li className="pb-2">If someone else has filed for protection of their brand name against the use of yours, this will be noted in each database record and usually includes links to their respective application.</li>
                </ul>
                </div>
                <div className="faq-search-body">
                    <div className="faq-search">
                        <div className="faq-inner-body">
                            <h2><b><b>Register your Trademark now</b></b></h2>
                            <div className="form-body">
                                <form className="faq-form">
                                    <img src="https://assets.vakilsearch.com/live-images/trademark-search/glassIcon.svg" alt="search-icon" />
                                    <input type="text" placeholder="Search your brand name here" className="faq-inp"/>
                                  <button type="submit">Search now</button>
                                 </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="faq-main-2">
                    <h2 className="pt-5">Why Do You Need a Trademark Search India?</h2>
                    <div className="pt-4">
                        Trademark searches are not easy. They require a lot of time and effort, which is why many people choose to outsource the process. However, if you do decide to do your own search, keep in mind that it can be more expensive than going through an agency. When looking for a trademark public search company, consider the following criteria:
                    </div>
                    <ul className="pt-4">
                        <li className="pb-2"><b>Expertise: </b> Make sure the company has experience in more than one industry and specialty so they can provide accurate results across different fields.</li>
                        <li className="pb-2"><b>Cost: </b> Make sure the company charges a reasonable fee that’s competitive with other agencies.</li>
                        <li className="pb-2"><b>Time frame: </b> Find out what their turnaround time is so you know how long you’ll have to wait for your results.</li>
                        <li className="pb-2"><b>Results: </b> You want to find a reputable company that provides reliable results so you can be confident your potential trademark will be protected from infringement</li>
                    </ul>
                </div>
                <div className="faq-main-3">
                    <h2 className="pt-5">How to Do Trademark Search in India - Brand Registration Check?</h2>
                    <div className="pt-4">
                    You can conduct a free tm search online on Vakil dekho's search tool. Get in touch with our experts right away for more guidance on the same. <br /><br />
                    An online trademark name search on the trademark registry can also be done on the Indian trademark database link. The trademark registry will then perform the search and send a report of any trademarks that are similar or potentially conflict with your trademark. When performing a TM public search, a company should consider the following four steps:
                    </div>
                    <ol className="pt-4">
                        <li className="pb-2">Determine whether or not they should file for a trademark.</li>
                        <li className="pb-2">Understand what type of trademark they need.</li>
                        <li className="pb-2">File an application with the trademark registry.</li>
                        <li className="pb-2">Protect their intellectual property.</li>
                    </ol>
                </div>
                <div className="faq-main-4">
                    <h2 className="pt-5">Things to Look Out for When Conducting Your Trademark Search Availability</h2>
                    <ul className="pt-4">
                        <li className="pb-2">The first step to conducting a tm search online is making sure you’re searching within the right legal jurisdiction.</li>
                        <li className="pb-2">The Indian trademark registry is the governmental agency tasked with registering trademarks and copyrights in India.</li>
                        <li className="pb-2">Additionally, if your company has filed for or will file for a trademark in another country, it’s best to search through that country’s trademark office as well.</li>
                        <li className="pb-2">Next, it’s important to determine what type of trademark you’re trying to look up. Is your brand name search a word? A symbol? A design? An identifier?</li>
                    </ul>
                    <div className="pt-4">
                        Make sure that you know which type of mark you are looking for before conducting your search! You may also want to consider differentiating between goods and services when searching for trademarks. There are certain types of marks that can only be used on goods (e.g., "Jaguar" can only be used on cars), while other marks are easier to use on services (e.g., "Bose" can be used on headphones). It may be more difficult to find a trademark corresponding with service-based goods, but this shouldn't deter you from submitting an application anyway! When making an application for registration of your mark, make sure that all required information is included: including the full name and address of the applicant and the date.
                    </div>
                </div>
                <div className="faq-main-5">
                    <h2 className="pt-5">Why Vakil Dekho?</h2>
                    <div className="pt-4">
                        This guide gives you the basic steps on how to conduct a trademark search and the things to look out for. It also gives you some resources that are helpful in the search process. You can read more on how to check brand name availability, what resources to utilise, and what other things to think about when conducting your trademark search here.
                    </div>
                    <ul className="pt-4">
                        <li className="pb-2">Outsourcing is a great way to jumpstart this process — Vakil dekho can give you the advantage when it comes to getting noticed and capturing customer interest.</li>
                        <li className="pb-2">But outsourcing alone isn’t enough. Your brand perspective is critical to driving success and avoiding common pitfalls. Not sure where to get started? We have got you covered.</li>
                    </ul>
                </div>

                <div className="faq-main-6">
                    <h2 className="faq-main-6-title">
                        FAQ's on Trademark Search
                    </h2>
                    <div className="pt-4 ques-btn">
                        <button className="faq-main-6-btn" type="button">
                            <span>What is a Trademark Clearance Search?</span>
                            <img src="https://assets.vakilsearch.com/live-images/cns-revamp/black-plus.svg" alt="" />
                        </button>
                        <button className="faq-main-6-btn" type="button">
                            <span>What is a Trademark Knockout Search?</span>
                            <img src="https://assets.vakilsearch.com/live-images/cns-revamp/black-plus.svg" alt="" />
                        </button>
                        <button className="faq-main-6-btn" type="button">
                            <span>To Conduct a Trademark Search, Do I Need to Know a Trademark Class?</span>
                            <img src="https://assets.vakilsearch.com/live-images/cns-revamp/black-plus.svg" alt="" />
                        </button>
                        <button className="faq-main-6-btn" type="button">
                            <span>What is a Comprehensive Trademark Search?</span>
                            <img src="https://assets.vakilsearch.com/live-images/cns-revamp/black-plus.svg" alt="" />
                        </button>
                        <button className="faq-main-6-btn" type="button">
                            <span>Can I do my own trademark search?</span>
                            <img src="https://assets.vakilsearch.com/live-images/cns-revamp/black-plus.svg" alt="" />
                        </button>
                        <button className="faq-main-6-btn" type="button">
                            <span>Is it necessary to conduct a trademark search?</span>
                            <img src="https://assets.vakilsearch.com/live-images/cns-revamp/black-plus.svg" alt="" />
                        </button>   
                    </div>
                </div>

            </section>

        </>

    )
}
