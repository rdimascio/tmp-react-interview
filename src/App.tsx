import React from "react";

/**
 * Goal: Design an application to search github users via their username.
 *
 * You have access to tailwindcss for styling, docs here: https://tailwindcss.com/docs/installation
 * I can provide you with the access token for github.
 *
 * Requirements:
 * 1. Create a form to search for a user on GitHub.
 *    - Create an input field to take the username as input.
 *    - Create a button to submit the username.
 *    - Create a results area to display the search results for the matched user.
 *
 * You need to display the following info for the user:
 *    - Avatar
 *    - Username
 *    - Name
 *
 * 2. Create a "Favorited users" section to display the favorited users.
 *    - Create a way to add/remove a user to the favorited users section.
 *    - The favorited users can just be stored in memory and don't need to persist across sessions.
 *    - The favorited users should be displayed in a list, alphabetically sorted by username.
 *
 * Please match the following design as closely as possible:
 * https://www.figma.com/design/wSiI0DzUZndeyUPKquzQLh/GitHub-Search---Frontend-Interview?node-id=0-1&m=dev&t=27eltQc9DEX06old-1
 *
 * Here are the documentation links for the GitHub API (I can provide you the api key to use):
 * https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
 */

const App = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="h-20 flex items-center justify-center bg-gray-200">
        <h1 className="text-2xl">GitHub Search</h1>
      </div>

      <div className="mt-6">Add your search form here</div>
    </div>
  );
};

export default App;
