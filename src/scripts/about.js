import "../styles/about.css" 

export default function about() {
  const content = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about")

  const title = document.createElement("h1");
  title.textContent = "About Us";
  aboutContainer.appendChild(title);

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis interdum leo et auctor. Donec accumsan eleifend lectus. Duis condimentum aliquam mollis. Aliquam pharetra nunc et mi congue congue. Quisque ac velit orci. Aenean viverra lacinia enim et varius. Vestibulum risus felis, porttitor et suscipit eu, tincidunt non purus. Maecenas facilisis mi at porttitor cursus. Duis ultricies nulla in sapien sodales ornare. Mauris condimentum mi sit amet imperdiet tincidunt. Quisque ipsum justo, aliquet mollis velit eget, iaculis vehicula augue. Etiam venenatis bibendum nibh, a euismod felis tincidunt ac. Sed nec volutpat mi. Fusce sagittis consectetur magna sit amet vehicula. Phasellus fringilla dolor enim, vitae viverra tellus tempor suscipit. Nullam vel nisi condimentum, pharetra elit eget, pellentesque lectus.";
  aboutContainer.appendChild(aboutText);

  content.appendChild(aboutContainer);
}
