# Sharing-A-Repo-With-A-Partner
- In this md file, we will cover how to share a github repository with a partner.


## Steps for Sharing a Repo
- 1.) Navigate to your owned github repo URL
- 2.) Click on the settings tab.
![Alt text](Screenshot%202023-08-09%20142515.png)
- 3.) Click the Collaborators option
![Alt text](Screenshot%202023-08-09%20142704.png)
- 4.) Click the Add People button
![Alt text](Screenshot%202023-08-09%20142841.png)
- 5.) Ask your partner for their github handle, search for, once you find it click add
![Alt text](Screenshot%202023-08-09%20143602.png)

- 6.) After you have added the Youre partner will receive a email invitation to this repo, they will need to navigate to this email and then click accept

- 7.) After your partner clicks accept, they will now need to clone the repo that you created

- 8.) Your Partner will need to go to your repositories address on github, in this case, we will be using
- 9.) Click on the green code button.
![Alt text](Screenshot%202023-08-09%20134548.png)
- 10.) Verify you are using the auth that you have setup, default is typically HTTPS so leaving this option highlited is fine, if you have changed to ssh, then click this option instead.
![Alt text](Screenshot%202023-08-09%20134748.png)
- 4.) Click the copy button next to the url in the bottom right
- 5.) Open up your terminal, navigate to where you would like to store this repo locally and type in git clone, then paste what you just copied from github
```
git clone <paste what you copied from github>
```
- 11.) You and your partner are now good to start pair programming.
    - Remember,
    - one person should be driving
    - one person should be navigating
    - and to switch off on every problem or every 15 minutes for larger projects
- 12.) Whenever you are switching off with your partner make sure to run these commands below
```
git add .
git commit -m 'add your descriptive commit message of what you did'
git push
```
