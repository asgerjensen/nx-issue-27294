# NxIssue27294

Minimal Reproduction repo.

# Steps to reproduce

`npm install`
`npx nx serve nx-issue-27294 -c development`



# Steps to remedy

In "project.json" add `"prebundle": false` to serve target for config `development`


