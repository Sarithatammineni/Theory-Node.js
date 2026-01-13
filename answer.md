**Package Managers**:
=>What is a package manager?
A package manager is a tool that helps us install, update, remove, and manage external libraries (packages) that our project depends on.
**Example:**
If you want to create a server in Node.js, you can use the express package instead of writing HTTP logic manually.


=>Why do we need package managers in backend development?
Backend applications depend on many libraries such as:Web frameworks (Express),Database drivers (MongoDB, MySQL),Authentication libraries (JWT, bcrypt).


=>Problems faced if package managers are not used?
If package managers are not used then:
Developers must manually copy library code.
Version may mismatch between team members.
Difficult to update libraries.
Hard to track which library is used.


**NPM (Node Package Manager)**
=>What is NPM?
NPM is the default package manager for Node.js It allows installing third-party packages and manages project dependencies.


=>Why is NPM important for Node.js applications?
Node.js ecosystem heavily depends on reusable packages.Almost every backend project uses multiple NPM packages.It helps build scalable and maintainable applications.


=>How NPM helps in managing dependencies?
NPM stores dependency information in package.json Automatically installs required packages. Installs correct versions.Resolves dependency conflicts.Recreates project environment using one command.


**Backend Project Initialization**

=>What is the command used to initialize a backend (Node.js) project?
The command used used to initialize a backend project is **npm init**


=>Explain what npm init and npm init -y do?
**npm init**
Starts an interactive setup. It asks project details like Project name,Version,Description,Entry file.
Creates a package.json file

**npm init -y**
skips all questions.Uses default values.Immediately creates package.json


**Files and Folders created after project initialization**

=>package.json:Main configuration file of the Node.js project .Stores project details,Installed dependencies,Scripts,etc.

Importance:
Helps NPM manage dependencies.
Required to recreate the project environment.
Acts as project documentation.

*package.json file must be committed because it is required to know project dependencies and needed for installing packages.


=>Node_modules:Contains all installed NPM packages.Each dependency's code is stored here

Importance:
Required for application to run.
Automatically created by NPM
Very large in size.

*node_modules should not be pushed to github because the module is very large and can be recreated using npm install.


=>package-lock.json:Stores exact versions of installed dependencies.Locks dependency tree

Importance:
Ensures same versions for all developers.
Prevents “works on my machine” problems.
Improves consistency and reliability.

* package-lock.json must be committed .It ensures same dependency versions and important for consistency across environments.