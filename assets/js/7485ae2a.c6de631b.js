"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[9852],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2018:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o={sidebar_position:1},s="Welcome to WARP",l={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Welcome to WARP",description:"WARP (WDL Analysis Research Pipelines) repository is a collection of cloud-optimized pipelines for processing biological data from the Broad Institute Data Sciences Platform and collaborators.",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/warp/docs/get-started",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/get-started.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1639665845,formattedLastUpdatedAt:"12/16/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Best Practices for Building Data Processing Pipelines",permalink:"/warp/docs/About_WARP/BestPractices"}},p=[{value:"WARP Overview",id:"warp-overview",children:[]},{value:"Navigating WARP",id:"navigating-warp",children:[]},{value:"Using WARP",id:"using-warp",children:[{value:"1. Download the workflow and run on a WDL-compatible execution engine",id:"1-download-the-workflow-and-run-on-a-wdl-compatible-execution-engine",children:[]},{value:"2. Run the pipeline in Terra",id:"2-run-the-pipeline-in-terra",children:[]},{value:"3. Run or export the pipeline from Dockstore",id:"3-run-or-export-the-pipeline-from-dockstore",children:[]}]},{value:"WARP Versioning and Releasing",id:"warp-versioning-and-releasing",children:[]},{value:"Testing in WARP",id:"testing-in-warp",children:[]},{value:"Feedback",id:"feedback",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],c={toc:p};function d(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-warp"},"Welcome to WARP"),(0,r.kt)("p",null,"WARP (WDL Analysis Research Pipelines) repository is a collection of cloud-optimized pipelines for processing biological data from the Broad Institute Data Sciences Platform and collaborators."),(0,r.kt)("p",null,"The contents of this repository are open source and released under the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/LICENSE"},"BSD 3-Clause license"),"."),(0,r.kt)("h2",{id:"warp-overview"},"WARP Overview"),(0,r.kt)("p",null,"WARP pipelines provide robust, standardized data analysis for the Broad Institute Genomics Platform and large consortia like the Human Cell Atlas and the BRAIN Initiative. You can count on WARP for rigorously scientifically validated, high scale, reproducible and open source pipelines."),(0,r.kt)("p",null,"Our pipelines are written as \u201cworkflows\u201d using the ",(0,r.kt)("a",{parentName:"p",href:"https://openwdl.org/"},"Workflow Description Language (WDL)")," and they process a broad spectrum of \u201comic\u201d and array-related datasets (see the overview table below)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pipeline Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Types"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Germline Variant Discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"Genomes, Exomes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Genotyping Arrays"),(0,r.kt)("td",{parentName:"tr",align:null},"Variant discovery, Chip validation, Joint array analysis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Single-cell/nuclei Transcriptomics"),(0,r.kt)("td",{parentName:"tr",align:null},"Droplet based (10x Genomics), Smartseq2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Single-cell Epigenomics"),(0,r.kt)("td",{parentName:"tr",align:null},"Single nuclei ATAC-seq, Single nuclei MethylC-seq")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Joint Genotyping"),(0,r.kt)("td",{parentName:"tr",align:null},"Genomes, Exomes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Somatic Alignment (beta)"),(0,r.kt)("td",{parentName:"tr",align:null},"Exomes")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Try our pipelines in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces?tagsFilter%5B0%5D=warp-pipelines&tab=public"},"Terra"),", a platform for collaborative cloud analysis! Learn how  in the ",(0,r.kt)("a",{parentName:"p",href:"#_2-run-the-pipeline-in-terra"},"Using WARP")," section."))),(0,r.kt)("h2",{id:"navigating-warp"},"Navigating WARP"),(0,r.kt)("p",null,"All versioned and released pipelines are in one of the three ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines"},"pipelines")," subdirectories: broad (pipelines for the Broad Institute\u2019s Genomics Platform), cemba (pipelines for the BRAIN Initiative) or skylab (pipelines for the Human Cell Atlas Project)."),(0,r.kt)("p",null,"Each pipeline directory hosts a main workflow WDL that includes a pipeline version number and a corresponding changelog file."),(0,r.kt)("p",null,"Workflows may call additional WDLs, referred to as tasks, that are located in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/tasks"},"tasks")," directory."),(0,r.kt)("p",null,"Pipelines that are in progress or have not yet been validated are in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/beta-pipelines"},"beta-pipelines")," folder."),(0,r.kt)("h2",{id:"using-warp"},"Using WARP"),(0,r.kt)("p",null,"There are three ways to use WARP pipelines:"),(0,r.kt)("h3",{id:"1-download-the-workflow-and-run-on-a-wdl-compatible-execution-engine"},"1. Download the workflow and run on a WDL-compatible execution engine"),(0,r.kt)("p",null,"WDL workflows run on multiple systems, including ",(0,r.kt)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/"},"Cromwell"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chanzuckerberg/miniwdl"},"miniWDL"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dnanexus/dxWDL"},"dxWDL")," (see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openwdl/wdl#execution-engines"},"openwdl documentation"),"). "),(0,r.kt)("p",null,"To run a pipeline\u2019s latest release, first navigate to WARP ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),", search for your pipeline\u2019s tag, and download the pipeline\u2019s assets (the WDL workflow, the JSON, and the ZIP with accompanying dependencies; see Optimus example below)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"optimus_release",src:n(2579).Z})),(0,r.kt)("p",null,"You can also discover and search releases using the WARP command-line tool ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),"."),(0,r.kt)("p",null,"After downloading the pipeline\u2019s assets, launch the workflow following your execution engine\u2019s instructions."),(0,r.kt)("h3",{id:"2-run-the-pipeline-in-terra"},"2. Run the pipeline in ",(0,r.kt)("a",{parentName:"h3",href:"https://app.terra.bio/#workspaces?tagsFilter%5B0%5D=warp-pipelines&tab=public"},"Terra")),(0,r.kt)("p",null,"Several WARP pipelines are available in public workspaces on the Terra cloud platform. These workspaces include both the WDL workflow and downsampled data so that you can test the pipeline at low-cost."),(0,r.kt)("p",null,"If you are new to Terra, you can get started by registering with your Google account and visiting ",(0,r.kt)("a",{parentName:"p",href:"https://support.terra.bio/hc/en-us"},"Terra Support"),". After registration, search for WARP-related workspaces with the \u201cwarp-pipelines\u201d tag."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terra_warp",src:n(9402).Z})),(0,r.kt)("p",null,"To test the pipeline, clone (make a copy of) the workspace following the instructions in this Terra Support ",(0,r.kt)("a",{parentName:"p",href:"https://support.terra.bio/hc/en-us/articles/360026130851"},"guide"),"."),(0,r.kt)("h3",{id:"3-run-or-export-the-pipeline-from-dockstore"},"3. Run or export the pipeline from Dockstore"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dockstore.org/"},"Dockstore")," is a GA4GH compliant open platform for sharing Docker-based tools like WDL workflows. You can find WARP pipelines in Dockstore and run them on the Dockstore platform or export them to other platforms (including Terra)."),(0,r.kt)("p",null,"To view all available pipelines, just search \u201cwarp\u201d in the Dockstore search and browse the workflow list. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dockstore.org/en/develop/index.html"},"Dockstore documentation")," for details on launching the workflow."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dockstore",src:n(8949).Z})),(0,r.kt)("h2",{id:"warp-versioning-and-releasing"},"WARP Versioning and Releasing"),(0,r.kt)("p",null,"Pipelines in WARP are versioned ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantically")," to support reproducibility in scientific analysis and provide clearer analysis provenance. Version numbers allow researchers to confirm their data has all been processed in a compatible way. Semantic versioning gives immediate insight into the compatibility of pipeline outputs. Read more about ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/VersionAndReleasePipelines"},"versioning and releasing")," in WARP."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"To discover and search releases, use the WARP command-line tool ",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),".")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"testing-in-warp"},"Testing in WARP"),(0,r.kt)("p",null,"Each pipeline in WARP has accompanying continuous integration tests that run on each pull request (PR). These tests help ensure that no unexpected changes are made to each pipeline and confirm that each affected pipeline is tested with any changes to shared code. To support rapid development iteration, only the pipelines affected by a PR are tested and PRs to the ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," branch run \u201cplumbing\u201d tests using small or downsampled inputs. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"staging")," branch is promoted to ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),", the updated pipelines will be tested more rigorously on a larger selection of data that covers more scientific test cases. Read more about our ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/TestingPipelines"},"testing process"),"."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"WARP is always evolving! Please file any issues in GitHub or contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano")," with suggestions, feedback, or questions. We are always excited to discuss cloud data processing, provenance and reproducibility in scientific analysis, new pipeline features, or potential collaborations. Don\u2019t hesitate to reach out!"),(0,r.kt)("p",null,"Our planned upcoming improvements include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A unified testing infrastructure that eases the overhead for contribution"),(0,r.kt)("li",{parentName:"ol"},"Full contribution guidance"),(0,r.kt)("li",{parentName:"ol"},"Continued additions of pipeline documentation"),(0,r.kt)("li",{parentName:"ol"},"Pre-written methods sections and DOIs to enable easy publication citations"),(0,r.kt)("li",{parentName:"ol"},"More pipelines: bulk RNAseq, SlideSeq, updates to joint genotyping")),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"WARP is maintained by the Broad Institute Data Sciences Platform (DSP) in collaboration with partner organizations. The Lantern Pipelines team maintains the repository with invaluable scientific oversight and pipeline contributions from the DSP Methods group as well as the HCA and BRAIN Initiative Analysis Working Groups. We thank the DSP Customer Delivery team for their help with user-, documentation-, and Terra- support. WARP pipelines have been made in collaboration with or informed by scientists across many institutions, including: labs at the Broad Institute, the European Bioinformatics Institute, Chan Zuckerburg Initiative, NY Genome Center, University of California Santa Cruz, Berkeley, and San Diego, the Allen Institute, Johns Hopkins Medical Institute, and the Baylor College of Medicine."))}d.isMDXComponent=!0},8949:function(e,t,n){t.Z=n.p+"assets/images/Dockstore-72301086e4e435b05e0cd823a6c8b89b.png"},9402:function(e,t,n){t.Z=n.p+"assets/images/Terra_warp-383d77605a5c6872f88d2b82c2a3108f.png"},2579:function(e,t,n){t.Z=n.p+"assets/images/optimus_release-e99bd7be02e9d6137d218b02860ee56f.png"}}]);