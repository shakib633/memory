import React from 'react';

const Blogs = () => {
    return (
        <div>
        <div className="m-5 p-5 rounded shadow-lg"> 
           <h3 className="fw-bold">Q:Difference between authorization and authentication?</h3>
           <p className=" ">
           <h4 className="fs-5">Authentication</h4>
           <p>
Authentication is about validating your credentials like User Name/User ID and password to verify your identity. We use the OpenID Connect protocol for that. You can manage your authentication by clicking on My Account link in the upper right corner.</p>

<h4 className="fs-5">Authorization</h4>
<p>Authorization, on the other hand, occurs after your identity is successfully authenticated by cloudHQ. Then you can give permission to cloudHQ to access the resources such as files, emails. This is handled with the OAuth2 protocol. In simple terms, authorization gives our system the ability to access your data in the cloud. So you need to authorize access of Box and Google Drive as admin@. The authorizations are done under the Cloud Accounts tab.</p>

          </p>
        </div>

        <div className="m-5 p-5 rounded shadow-lg"> 
       <h3 className="">Q: Why Are You using firebase? What other option do you have to implement Authentication</h3>
       <p className=" "> <span className="fw-bold">Why i use firebase: </span>Easily integrate Firebase into your team's favorite tools. Trusted by the largest apps. Firebase helps teams from startups to global enterprises build & run successful apps. Backed by Google. Release Apps Confidently. Cross-Platform Solutions..</p>
       <p><span className="fw-bold">Other's option for Authentication: </span>Is there an alternative to Firebase?
Back4app is a reliable Firebase alternative that works with an amalgamation of open-source technologies. The platform is straightforward to use and has a low learning curve. It offers features like a relational data model, scalable hosting, REST and GraphQL APIs, notifications, authentication, and storage.</p>
        </div>
        <div className="m-5 p-5 rounded shadow-lg"> 
        <h3>what other services does firebase provide other than authentication?</h3>

        <p> Without Authentication Firebase Support :
<li>Cloud Storage.</li>
<li>Cloud Fire store.
</li>
<li>Firebase Realtime Database.
.</li>
<li>Firebase Hosting..</li>
</p>

        </div>
    </div>
    );
};

export default Blogs;