"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[4918],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1528:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a={},s="Creating the Imputation Pipeline's Modified 1000 Genomes Reference",l={unversionedId:"Pipelines/Imputation_Pipeline/references_overview",id:"Pipelines/Imputation_Pipeline/references_overview",isDocsHomePage:!1,title:"Creating the Imputation Pipeline's Modified 1000 Genomes Reference",description:"Background",source:"@site/docs/Pipelines/Imputation_Pipeline/references_overview.md",sourceDirName:"Pipelines/Imputation_Pipeline",slug:"/Pipelines/Imputation_Pipeline/references_overview",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/references_overview",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Imputation_Pipeline/references_overview.md",tags:[],version:"current",lastUpdatedBy:"George Grant",lastUpdatedAt:1642014949,formattedLastUpdatedAt:"1/12/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Imputation Overview",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/README"},next:{title:"Optimus Overview",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/README"}},c=[{value:"Background",id:"background",children:[]},{value:"Reference modification",id:"reference-modification",children:[]},{value:"Acknowledgments and Questions",id:"acknowledgments-and-questions",children:[]}],p={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-the-imputation-pipelines-modified-1000-genomes-reference"},"Creating the Imputation Pipeline's Modified 1000 Genomes Reference"),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Initial tests of the Imputation workflow followed by assessments of polygenic risk score (PRS) revealed that risk scores for coronary artery disease (CAD) were lower when computed from imputed array data as opposed to whole-genome sequencing data (see figures below)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8532).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3820).Z})),(0,o.kt)("p",null,"The systematic difference was due to a single site (10:104952499) which had a relatively high effect weight in the CAD weights file used for the PRS analysis. When using ",(0,o.kt)("a",{parentName:"p",href:"https://gnomad.broadinstitute.org/"},"gnomAD V2")," for comparison, the site appears to be incorrectly genotyped in the 1000G reference. Whereas the site's allele frequency is 0.72 in 1000G, it is only 0.086 in gnomAD V2. "),(0,o.kt)("p",null,"This finding suggests that some 1000G sites may be systematically incorrectly genotyped. As a result, the 1000G reference files were modified for the Imputation pipeline as described below. You can view the original, unmodified 1000G VCFs ",(0,o.kt)("a",{parentName:"p",href:"https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/release/20130502/"},"here"),". "),(0,o.kt)("h2",{id:"reference-modification"},"Reference modification"),(0,o.kt)("p",null,"To remove putative incorrect sites from the 1000G reference panel, allele frequencies were compared between it and gnomAD V2. First, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/scripts/BuildAFComparisonTable.wdl"},"BuildAFComparisonTable workflow")," was used to create a table of the allele frequencies for both reference panels. Then, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/scripts/FilterAFComparisonTable.wdl"},"FilterAFComparisonTable workflow")," was applied to compare the observed number of alleles in 1000G to the expected number of alleles set by gnomAD V2 using a two-sided binomial p-value. "),(0,o.kt)("p",null,"Since gnomAD reports non-Finnish European allele frequencies while 1000G reports European allele frequencies, p-values were calculated both including and excluding European samples. If both p-values were less than 1e-10, then the site was flagged as problematic. After identifying the putative problematic sites, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/scripts/RemoveBadSitesById.wdl"},"RemoveBadSitesById workflow")," was used to remove them, generating a cleaned 1000G reference panel. "),(0,o.kt)("p",null,"This cleaning removes 359,369, or about 0.8% of sites from 1000G reference. In the histogram below, only sites that were were flagged as incorrect are shown. The vast majority of flagged sites have p-values that are much lower than the threshold."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8537).Z})),(0,o.kt)("p",null,'As can be seen below, using this "cleaned" 1000G removes the systematic difference between imputed and WGS scores.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4169).Z}),"\n",(0,o.kt)("img",{src:n(9690).Z})),(0,o.kt)("p",null,"The comparison below shows that the improvement is due only to the removal of sites that were poorly imputed with the original 1000G reference, the remaining sites are not being imputed at a higher quality than they were with the original 1000G reference. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9279).Z})),(0,o.kt)("p",null,"A public copy of the cleaned reference can be found at gs://broad-gotc-test-storage/imputation/1000G_reference_panel/ as shown in the Imputation workflow's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/broad/arrays/imputation/example_inputs.json"},"example configuration file")," (JSON)."),(0,o.kt)("h2",{id:"acknowledgments-and-questions"},"Acknowledgments and Questions"),(0,o.kt)("p",null,"This technical report was contributed by the Methods Team of the Broad Data Sciences Platform. "),(0,o.kt)("p",null,"For questions or additional information about the Imputation pipeline's reference generation, email ",(0,o.kt)("a",{parentName:"p",href:"mailto:ckachuli@broadinstitute.org"},"Chris Kachullis"),"."))}u.isMDXComponent=!0},9279:function(e,t,n){t.Z=n.p+"assets/images/cleaned_vs_original_compare_to_gnomad_af_method_correlations-1-aa7844c7e0c83afa3253e8b0cf2872c1.png"},4169:function(e,t,n){t.Z=n.p+"assets/images/imputed_vs_wgs_scores_cleaned_method_2_1kg-1-e6d82de36159fcdc58e3f08462ccf75d.png"},9690:function(e,t,n){t.Z=n.p+"assets/images/imputed_vs_wgs_scores_cleaned_method_2_1kg-2-3180ec787238e08d7613ec0fb2e228b8.png"},8532:function(e,t,n){t.Z=n.p+"assets/images/imputed_vs_wgs_scores_original_1kg-1-dd2429888c94f42ab51737423d9b381a.png"},3820:function(e,t,n){t.Z=n.p+"assets/images/imputed_vs_wgs_scores_original_1kg-2-c57bde69e3b7cb889540c5638e77ae95.png"},8537:function(e,t,n){t.Z=n.p+"assets/images/method_2_p-value_histogram-1-d362a5c12ff4c217ee7d75a4f17974b0.png"}}]);