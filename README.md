# Assessment

**This framework has developed on PageObjectModel design pattern using  Webdriverio**

**Prerequisites software’s should be installed : **

1.Node js

2.Visual studio code

3.Git

4.Browser(chrome)

**Kindly follow below steps to execute tests on your machine **
1.	Clone repository  https://github.com/svinodkmr/Assessment.git
2.	Open the project in visual studio code
3.	From terminal enter “npm install”
4.	Run command “npm run assessment” to execute tests.
5.	And you can find the Html reports  under **“Assessment\Reports\Html-Reports\master-report.html”**
	 ![image](https://user-images.githubusercontent.com/21183656/121730462-54786600-cab5-11eb-9419-faa4e5aeac9a.png)
	 ![image](https://user-images.githubusercontent.com/21183656/121730583-8093e700-cab5-11eb-8971-d9431770ced7.png)
       
6.	You can find board members names & excerpts in CSV file under **“Assessment\export.csv”**
 ![image](https://user-images.githubusercontent.com/21183656/121730614-8ab5e580-cab5-11eb-8d30-79152153af9b.png)

**Below steps to integrate with Jenkins CI :**

1.Install Jenkins server from https://www.jenkins.io/download/

2.Create new free style project

3.Enter the project directory path in General ->Use customs workspace

4.Add build step and select Execute shell

5.And then enter command "npm run Assessment"

6.Save project and trigger the build.

7.In console output we can see "Spec report" and HTML report under **“Assessment\Reports\Html-Reports\master-report.html”**

