import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ReviewCards = ({ gridLayout }) => {
  const StyledReviewCards = styled.div`
    .masonry-item {
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      google: file(relativePath: { eq: "6.0 Reviews/Google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 85)
        }
      }
      yelp: file(relativePath: { eq: "6.0 Reviews/Yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 74)
        }
      }
      facebook: file(relativePath: { eq: "6.0 Reviews/Facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 123)
        }
      }
      headshot: file(relativePath: { eq: "6.0 Reviews/avatar.svg" }) {
        publicURL
      }
    }
  `);

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }

  const reviews = [
    {
      name: "John	Shumate",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Amanda Gresiak is engaging, detail oriented, and clear. She realizes the stress of apartment leasing and she offers her best service, professional perspective, and assistance.",
    },
    {
      name: "Ted	Kardash",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I have been well-served by Amanda and her team at AMG properties for the past 3 years when I became a client. They have been  friendly, responsive, and efficient in dealing with the many aspects of the rental market.",
    },
    {
      name: "Philip	Huszar",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "My family and I have been clients for over 4 years. The service we have received has been wonderful. Communication has been extremely fast, and all necessary work is completed quickly. Amanda  and Kevin are a pleasure to work with, and I recommend AMG Props highly.",
    },
    {
      name: "Wanjin	Hong",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote: "An efficient and capable and reliable team",
    },
    {
      name: "Robert	ONeill",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "AMG is professional, thorough and reliable.  They do an excellent job.",
    },
    {
      name: "Chris	Ryan",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "AMG Props has been a pleasure to work with. I would recommend them to anyone looking for a property management company. They have taken care of my property for over three years now.",
    },
    {
      name: "Admissions	Assistant",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "AMG Props is an amazing rental company. Always so prompt, attentive and detailed!",
    },
    {
      name: "Ted	Oatway",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Professional, timely responses and competent. We are very happy with the service we get from AMG Props.",
    },
    {
      name: "Scott	Buzzatto",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Amanda and her husband make a great PM duo and have always been there when I needed them. I couldn’t recommend them highly enough.",
    },
    {
      name: "Richard	Fletcher",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "AMG does a fantastic job of protecting our property and keeping our tenants satisfied. They have our full confidence.",
    },
    {
      name: "Nancy	Covarrubias",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Such good experience renting with them!! Always available when needed and always on top of any maintenance issues! Been renting from them for 4 years now:)",
    },
    {
      name: "Todd	Beasley",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I’ve been with AMG Props for two years now and they have been great! Always responsive, very professional and really nice people.",
    },
    {
      name: "Pearson	Gator",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Our experience renting a house through AMG properties has been terrific.  Their system for processing maintenance requests is efficient and very easy to use.  The company has always been very responsive in addressing any issues quickly.  I would recommend them to others looking to rent in the market.",
    },
    {
      name: "Elizabeth	McDonald",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I've worked with many property managers and AMG has been the best.  They're organized, responsive and effective.  I've been very pleased and I highly recommend them.",
    },
    {
      name: "David	Cooper",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "We have been very impressed with the customer service of AMG Props since we began renting here at the beginning of January.  When we first moved in, we had some issues with internet, cable and heat and when we notified them about this, Kevin was sent over on a weekend day (his day off).   He fixed everything we needed done as well as some extra tasks that he saw needed attending to. I believe they value customer service for their renters and we appreciate that very much.  We feel they are a good company, especially when it comes to maintenance issues or concerns.  We especially appreciated our contacts with Amanda and Cody, who we dealt with most often.",
    },
    {
      name: "Rachel	Tiedemann",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I have been renting from AMG Props for a few years - the staff is friendly and helpful, and everyone can assist you, so if your main contact is away, you will still get great help. They have an amazingly easy to use Tenant Portal, you can pay rent electronically, as well as submit any maintenance requests. Quick to respond as needed, but our property is well maintained by them so we hardly need to contact them for any fixes. Happy to be renting from them!",
    },
    {
      name: "Jennifer",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I live out of state and have had AMG props take care of my property since 2012. They have done a phenomenal job of handling any issues related to the property and tenants. They contact you immediately of any issues that need to be resolved and give a quote as to how much the repair is and are willing to get multiple quotes if asked. I feel like they are pretty well connected in the community that there prices are competitive. Another great point about AMG props is in the last 7 years my property has never sat vacant for more than 2 months. They are on top of of vacating tenants and immediately get the property reading for the next clients.",
    },
    {
      name: "Martin	Delage",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Amanda and her colleagues were professional, knowledgeable and did not spare any effort to find suitable tenants for our property.  We feel we are leaving the management of the property in good hands.",
    },
    {
      name: "David	Xiang",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Had a great experience working with AMG Props to manage my property in San Diego for the past ~5 years. Very prompt response times, thorough documentation, and extremely professional. Thank you!",
    },
    {
      name: "Maria	Pollard",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "We hired AMG Props in San Diego to manage our property since June 2017 and provide us with a substantial amount of help with running our rental property and ensuring every aspect of our investment operates smoothly. Amanda Gresiak has been our Property Manager. Amanda is very professional with excellent customer service. She knows property management very well. She is honest, trustworthy, friendly, hard working, passionate about her job and overall wants her company to succeed in all aspects of property management. She is very responsive and works very diligently. She is very knowledgeable on property management contract and if you have any questions she will walk you through it so that there’s no miscommunication on the fine print. She has great analytical skills for the fair market value. She knows how to deal with tenant issues, answer any questions we may have and just about every inquiry we ask her she responds to as quickly as possible even after hours and any important communication to our tenant she delivers as quickly as she can. If there’s any issue we know we can rely on her to get the job done correctly and efficiently the first time. We are very happy with her service. Overall, it’s a pleasure working with Amanda Gresiak. We highly recommend her to anyone. AMG Props is the “BEST” property management company you can find in the San Diego area to manage your property.",
    },
    {
      name: "Rachel	T.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/mxF_g86b2w9jGwPMOQCW0A/60s.jpg",
      quote:
        "I have been renting from AMG Props for a few years - the staff is friendly and helpful, and everyone can assist you, so if your main contact is away, you will still get great help. They have an amazingly easy to use Tenant Portal, you can pay rent electronically, as well as submit any maintenance requests. Quick to respond as needed, but our property is well maintained by them so we hardly need to contact them for any fixes. Happy to be renting from them!",
    },
    {
      name: "Shanti	Pappas",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote: "Professional, helpful, consistent, exceptional service.",
    },
    {
      name: "Jenn	Matuszkiewicz",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote: "Amanda and her team are excellent!",
    },
    {
      name: "Ernie 	Smith",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote: "Turned over my property to AMG 2 years ago, away go troubles!",
    },
    {
      name: "Steve	Loomis",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "We have used  Amanda and AMG props for several years now to manage our rental house.I can say that we have had any complaints over time.I could not give a higher recommendation  than I give AMG.",
    },
    {
      name: "Jennifer	Logan",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "We love working with AMG!  Very professional and super customer service!",
    },
    {
      name: "Adam	Elmakias",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote: "Great company, prompt responses always and they truly care",
    },
    {
      name: "Angela	Coriale",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      quote:
        "I love AMGProps! They take care of everything on our rental property, and we never have to think about a thing! I highly recommend.",
    },
    {
      name: "Ronen	Halevy",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "AMGprops is a wonderful team of professionals who continue to deliver excellent service. We live across the country and they take care of everything for us by consistently going the extra mile.",
    },
    {
      name: "Royce	Nicholas",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I've really enjoyed working amg. They are very responsive and responsible. They do all the hard work so I don't have too. Thanks Amanda and crew!",
    },
    {
      name: "Jeff	Rich",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Amanda and her team have been amazing with my property for over five years now. Can't say enough good things about the business. Highly recommend!",
    },
    {
      name: "Derric	Haynie",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Amanda takes care of everything! She helps close the tenants, maintain the property, and handles all the back office paperwork and paying us out properly. 100% recommend her if you're thinking of renting out your property.",
    },
    {
      name: "Jacob	Searing",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Always a pleasure dealing with AMG Props. They manage my property professionally and well. Even though I am overseas much of the time, I feel secure knowing they are looking after my interests.",
    },
    {
      name: "Hollister	Hollister",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I've had bad experience with the previous property management company. When the owner switched to AMG it was like a breath of fresh air. The last company had no sense of urgency or communication skills. Requesting a service request with AMG is painless and easy. They always keep you in the loop on your request. When and If I have to call the AMG office every one is always so friendly and helpful.",
    },
    {
      name: "Gary	Robinson",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "AMG Props has been managing my property for three years, during which time they have always been responsive to my questions and concerns, and proactive in keeping my property in tip top shape.  They also provided the contractor to do some touch up items to make the property ready to rent.  Overall, I'm very pleased with their service.",
    },
    {
      name: "Christine	Justice",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "AMG Props has been providing property management for me for the last  6-7 years, both for a rental property and for summer airbnb rental. The company has grown and improved over this time and I have been fully satisfied. My requests have been heard and responded to quickly. Regular maintenance has been handled without my involvement. Can't say enough good things about this company.",
    },
    {
      name: "Jack	Sparks",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "After a little kerfuffle initially, my experience since then with AMG has been wonderful, very smooth. It can be stressful owning a rental property that's quite a ways from where I live. I take great comfort in knowing my property is in such capable hands with AMG. I know my and my tenant's needs will be taken care of in a timely and very responsive manner.",
    },
    {
      name: "Brad	Scurlock",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "AMG Props has managed my elderly parents' rental properties for well over two years.  The highly professional staff ensures that all bills (association dues, property taxes, etc.) are paid promptly and AMG's monthly summaries are consistently accurate and easy to comprehend.  When periodic maintenance issues arise, AMG is quick to respond and arranges for quality work to be performed in a timely manner.  The responsive and friendly staff are reachable via phone/email.  I highly recommend this outfit.",
    },
    {
      name: "Valerie	Running",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Amanda and her staff at AMG Props are stellar!  Amanda has been managing our rental unit perfectly for years.  She found a tenant within a week of contracting with us and has kept the property continuously rented out.  Our monthly rent payment is deposited directly into our bank account on time each month.  Amanda anticipates any issue that could come up before we even need to address it and constantly finds ways to provide better service to us, as if that were even possible!  She automatically emails us clear accounting reports monthly and at year-end.  And whenever we have a question or request, Amanda gets back to us promptly.  Thank you.",
    },
    {
      name: "Jamie	Wainer",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Our Family is fortunate enough to own a modest income property near San Diego. Unfortunately its hours away by car making it very difficult to handle the inevitable maintenance issues that come up not, to mention the occasional but dreaded tenant turnover.  They handle it all! If a repair is needed they act quickly,  they are good communicators and work well with the tenants, their monthly reports are easy to understand and our tax person loves them. Amanda and Michele are great!",
    },
    {
      name: "Anna	D.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/HpJkr2rq46j_ThxoJbsOWg/60s.jpg",
      quote:
        "We have used AMG Props to manage our investment property for the past 4 years.  Their staff has attended to all phases of property management for us - advertising for renters, interviewing and arranging for background checks, arranging for pre-move in cleaning, collecting monthly rent, making monthly payments, performing routine maintenance and when necessary arranging for professional repairs.  Michele recently helped us remediate a costly roof leak in our unit.  She worked efficiently to find vendors and get repair estimates.  Kevin brought in his trusted contractors and oversaw replacement of all the flat roof wood and installation of Dex-O-Tex waterproof surfacing, as well as the door to the roof deck area that was allowing water to seep in.  AMG coordinated with our tenants to have the work done and when it was completed we could not have been more pleased!  At our request Michele then arranged to have the interior renovated, repairing water damage, selecting colors and repainting the entire unit, selecting and replacing all carpeting and upgrading the vanities, countertops, sinks and faucets on a *very* tight timeline.  Amanda and her team administer payment of all of the day to day expenses associated with our property and issue us a year-end tax statement that greatly simplifies income tax preparation.  AMG Props has made our life so much easier and our tenants and HOA appreciate their attention to detail and professionalism.  And...they are very nice people to work with too!  :-)",
    },
    {
      name: "Salam	H.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/5V5HDKg0-Fl21LRoT3SKmw/60s.jpg",
      quote:
        "I have worked with AMG for several years. Michele, Amanda, Stephanie, and Cody are a great team. They are highly organized, extremely professional, and conduct their business timely and professionally. I highly recommend this company.",
    },
    {
      name: "Janene	R.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "AMG Props is definitely one of the best property management companies we have ever rented from!! They are very responsive and always get back to you quickly. They are always willing to help with any issue you have and are very fair in their expectations. Michele and Amanda are awesome! Very kind, professional, helpful, and understanding! I truly enjoyed working with them. Our whole experience with AMG from beginning to end was nothing less than excellent. :) We highly recommend them!!",
    },
    {
      name: "Amber	G.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/Rta31_Q7CVohX75Z0gYIoQ/60s.jpg",
      quote:
        "After months and months of looking and getting turned down because of my fiance's credit score AMG props give us a chance. We unfortunately had to move out because of finances but they were the best Property Management Company that I've worked with. Never once have I gotten a fair deposit return until now. When we are ready we will continue to work with them in the future.",
    },
    {
      name: "Peter	M.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/hRipAQ1gHWNZs6seL99spw/60s.jpg",
      quote:
        "My wife and I were on the tenant side of AMG Props and our experience was excellent from A-Z.  Amanda is very professional and easy to deal with, by far the best property manager I've ever dealt with (in over 20 years of renting). If anything was wrong - large or small - it was handled professionally and very quickly.  I would have zero reservations about renting a property AMG managed, and if we ever have a property to be managed I will go straight to AMG Props.",
    },
    {
      name: "Georlea	W.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/_vMxWrmAWzzfnBLgKASFSQ/60s.jpg",
      quote:
        "AMG Prop is such a great company. Really enjoyed talking with Amanda. She's very friendly a very helpful. Such a great family oriented company. Very caring staff. Lived at one of the houses rented from AMG Prop and I was very happy. Wish AMG Prop was in Utah where I'm moving to in January 2017.",
    },
    {
      name: "Jeff	R.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Best property manager I've ever had. This company is on point and completely manages all your needs. Amanda and her crew are priceless. She's been managing my property for two years and I've never had to attend to anything. Highly recommend!",
    },
    {
      name: "Jeremy	McKinney",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I have been using AMG props for years for the management of my property in Serra Mesa, and the team there has been great! Very professional, prompt with payments , and really easy to get ahold of, and communicate with. I would recommend them to any of my family and friends!! Thanks for the great, professional service!",
    },
    {
      name: "Brittany	B.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/JrccX0BuKG5APWHfygSudA/60s.jpg",
      quote:
        "I did not even get to use the services of AMG Props, but was still super impressed. There are actually two property management companies in San Diego called 'AMG' and we accidentally went to the wrong one... on a Sunday, nonetheless, when they were closed. Regardless we were welcomed inside by Amanda and she helped us figure out if she had the listing we had seen online... but alas, it was the other AMG. We would have rented something from her right then and there if she had what we were looking for... Amanda was SO kind to us even though she knew we were in the wrong place. If you are looking for someone to represent your property, choose her. Having rented from two horrid property management companies before I can tell you her genuine friendly attitude makes AMG a world apart from any others. Thank you Amanda!",
    },
    {
      name: "Ashley	J.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/X_DFRrfIdwkHycqAwYivxg/60s.jpg",
      quote:
        "Amanda, owner of AMG Props, is undoubtedly one of the best in San Diego. She truly cares about her renters and she shows impressive dedication and commitment. She is quick at getting back to me whenever I have an issue and she so easy to work with. She always has the best, most reliable vendors take care of maintenance problems and follows up with you to make sure it was properly taken care of. I do/will refer her company to anyone I come across looking for a new rental property.",
    },
    {
      name: "Scott	S.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "When looking for a property management company to represent our Scripps Ranch townhome last December, we selected Amanda and her team after meeting with several different property management groups.  We were thoroughly satisfied with their professionalism and approachability in their results to assemble a professional marketing package for our home and find us tenants.  We would highly recommend AMG to anyone seeking property management services.",
    },
    {
      name: "Jen	R.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/T1yzdCi0jPVBlOdqFjxxeQ/60s.jpg",
      quote:
        "I was referred to Amanda/AMG to manage our duplex in North Park.  She found wonderful tenants and vetted them fully.  She helped us get the units ready and had some really great ideas to help maximize our return.  Both units rented quickly and for the rents we wanted.  She has been managing them flawlessly.  Her monthly accounting is easy to understand and her year end statements make tax preparation a breeze. I highly recommend AMG!",
    },
    {
      name: "Seth	B.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Amanda is a consistent recipient of my client referrals because she always gets 5 star reviews. She is loved by my clients, is ALWAYS available and her rates are so reasonable. I can't say enough about her and I would trust her with any property large or small. She is at the cutting edge of technology but always remains available and up beat. A huge breath of fresh air from what has become the norm in the business. I'm proud to write this yelp! Thanks Amanda!",
    },
    {
      name: "Kira	H.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/pq-qxBKIzmWnUxpiOu8pjw/60s.jpg",
      quote:
        "Amanda was exceptional in helping me find a new place to live, she goes above and beyond expectations to make sure all my needs were met, even helping me find a place where my dog was welcome. :) I would recommend her to anyone looking for a place to live, and who values customer service at a time when so many others disregard it in business.",
    },
    {
      name: "Jordan	M.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/eTn5mnphI5gKlYkMtMRSvQ/60s.jpg",
      quote:
        "I've worked with Amanda for over a year now, and she has been really accommodating and helpful. She has a very nice way about her. I recommend AMG Props to those looking for a wonderful property manager!",
    },
    {
      name: "Michael	R.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/JJCp8HabYwjWCa3ua3pqAA/60s.jpg",
      quote:
        "I referred my clients to Amanda to help rent out their home in preparation to buy a new home themselves.  She was able to earn the business while competing with at least one other property manager.  My clients have reported being thrilled with her service and ability to manage the property, rents and tenants.  As a local mortgage lender, I get inquiries for property management periodically and recommend Amanda/AMG each time.",
    },
    {
      name: "Allison	B.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Amanda Gresiak is a great property manager!  She's extremely professional and goes out of her way to accommodate her clients' needs.  I appreciate how knowledgeable and up-to-date she is with all of the properties she manages. After working with her for my own needs, I recommended her services to a friend, and I've heard nothing but excellent feedback from him.  I would definitely recommend Amanda (AMG) for anyone's property management needs.",
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
        return (
          <div
            className={`w-full bg-white border border-gray-200 rounded-lg mb-8 md:mb-10 p-6 md:py-8 md:px-7 md:mx-3 lg:mx-5 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-3.5">
                  <span className="text-primary-900 font-heading font-semibold">
                    {review.name}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <GatsbyImage
                  image={review.platform}
                  alt="Social platform logo"
                />
              </div>
            </div>
            <blockquote>
              <q className="block mb-6 md:mb-0 before:hidden">{review.quote}</q>
            </blockquote>
            <div className="block md:hidden">
              <GatsbyImage image={review.platform} alt="Social platform logo" />
            </div>
          </div>
        );
      })}
    </StyledReviewCards>
  );
};

export default ReviewCards;
