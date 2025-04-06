document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            "title": "Rweet: A Django Based Social Media Web App",
            "description": "Developed a web application using Python, Django, Bootstrap, PostgreSQL, HTML, and CSS that allows users to create, share, and manage 'Rweets,' similar to tweets. The application features a comprehensive user authentication system, including registration, login, and password reset functionality. Users can create, edit, and delete their Rweets, with the ability to upload images alongside each post. The interface is designed to be fully responsive, ensuring a seamless experience on both mobile and desktop devices. An email service was integrated to facilitate secure password recovery, and Django's built-in models and forms were utilized to ensure secure and efficient data handling. I managed both the front-end and back-end development, focusing on scalability and performance throughout the project.",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/TweetBlog",
                "website": "https://rweetblog.onrender.com/rweet/"
            },
            "languages": "Python: The core programming language used for developing the application. Django: The web framework utilized to build the server-side logic and manage data. HTML & CSS: Used for structuring and styling the front end. Bootstrap: A framework that facilitates responsive design for both mobile and desktop views.",
            "work": "The Rweets web application allows users to create, share, and manage 'Rweets' similar to tweets. The application features a robust user authentication system, enabling secure registration, login, and password reset. Users can create, edit, and delete Rweets while uploading images to enhance their posts. The user interface is designed to be fully responsive, ensuring a seamless experience across various devices. The application efficiently handles data using Django’s built-in models and forms, promoting secure data management and retrieval.",
            "limitations": "Despite its comprehensive features, the Rweets application has some limitations. Performance may vary based on server resources, particularly during high traffic. Additionally, the application depends on Django’s capabilities and external libraries for certain functionalities, which might introduce constraints on scalability or customization. Lastly, users may encounter occasional delays in data processing during peak usage times.",
            "images": []
        },
        {
            "title": "TransVox Transcription System",
            "description": "The Desktop Voice Assistant is a comprehensive application developed using Python and PyQt5, featuring three main modules: TranslateXpress, SoundToScript, and ScriptToSound. This project aims to enhance accessibility and usability by providing seamless translation, voice-to-text transcription, and text-to-voice generation capabilities.",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/TransVox",
                "website": ""
            },
            "languages": "Python: The core programming language used to develop the application. PyQt5: The library used for creating the graphical user interface (GUI). Speech Recognition APIs: Technologies like Google's Speech Recognition API to transcribe spoken words into text. Translation APIs: Services like Google Translate API or Microsoft Translator API for text translation. Text-to-Speech (TTS) Engines: Tools like gTTS (Google Text-to-Speech) or pyttsx3 for converting text to spoken words.",
            "work": "The Desktop Voice Assistant performs the following tasks: 1. TranslateXpress: This module enables users to translate text between multiple languages. It leverages advanced translation APIs to ensure accurate and efficient translations, supporting a wide range of languages. 2. SoundToScript: This module converts spoken words into written text. It uses speech recognition technologies to transcribe audio input accurately, making it easier for users to document conversations, take notes, or transcribe lectures. 3. ScriptToSound: This module converts written text into spoken words. It utilizes text-to-speech (TTS) engines to generate natural-sounding audio output from the given text, helping users to listen to written content hands-free.",
            "limitations": "Despite its robust features, the Desktop Voice Assistant has a few limitations: 1. Accuracy: The accuracy of translations and transcriptions can vary depending on the complexity of the language and the quality of the input. Background noise and unclear pronunciation can affect the performance of the SoundToScript module. 2. Resource Intensive: The application may require significant computational resources, particularly for real-time voice processing and translation tasks. Users with lower-end hardware might experience slower performance. 3. Dependency on External Services: The effectiveness of translation and text-to-speech functionalities often depends on external APIs and services, which may have usage limits, require subscriptions, or face downtime, impacting the overall user experience. 4. Language Support: While the application supports multiple languages, some lesser-known languages might not be as well supported or might not provide the same level of accuracy in translation and transcription.",
            "images": ["images/transvox1.png", "images/transvox2.png", "images/transvox3.png", "images/tranvox4.png"]
        },
        {
            "title": "Movie Recommendation System",
            "description": "The Movie Recommendation System is an intelligent application developed using Python and machine learning algorithms. It classifies and cleans movie data, applies machine learning techniques to generate recommendations, and uses Streamlit for deploying the application with a user-friendly frontend. This system helps users discover movies based on their preferences and viewing history.",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/FilmFusion",
                "website": ""
            },
            "languages": "Python: The core programming language used for data processing, machine learning, and backend development. Pandas and NumPy: Libraries for data manipulation and numerical operations. Scikit-learn: A machine learning library used for implementing various algorithms. Streamlit: A framework for creating and deploying interactive web applications. Surprise: A Python scikit for building and analyzing recommender systems. Natural Language Processing (NLP) Libraries: Such as NLTK or spaCy, for processing user reviews and extracting sentiments.",
            "work": "The Movie Recommendation System performs the following tasks: Data Collection and Cleaning: The system collects movie data from various sources, including movie ratings, genres, user reviews, and metadata. It then cleans the data by handling missing values, removing duplicates, and normalizing the data for consistency. Feature Extraction and Classification: The system extracts relevant features from the cleaned data, such as movie genres, user ratings, and review sentiments. It uses these features to classify movies and group them into clusters based on similarity. Machine Learning Algorithms: The system applies machine learning algorithms, such as collaborative filtering, content-based filtering, or hybrid methods, to generate personalized movie recommendations for users. These algorithms analyze user behavior and preferences to suggest movies that are likely to be of interest. Deployment with Streamlit: The system uses Streamlit to create an interactive and visually appealing frontend. Users can input their preferences, view recommendations, and explore movie details through an intuitive web application interface.",
            "limitations": "Despite its advanced functionalities, the Movie Recommendation System has a few limitations: Data Quality: The accuracy of recommendations depends heavily on the quality and completeness of the data. Incomplete or biased data can lead to less accurate suggestions. Cold Start Problem: For new users or movies with little to no data, the system may struggle to provide accurate recommendations. This issue, known as the cold start problem, is a common challenge in recommendation systems. Scalability: As the amount of data and number of users increase, the system may require significant computational resources to maintain performance. Ensuring scalability can be a challenge. Bias in Recommendations: The system may inadvertently reinforce existing biases in user data, leading to recommendations that do not promote diverse content. Addressing algorithmic bias is crucial for providing fair recommendations.",
            "images": ["images/movie recommendor.png", "images/movie1.png", "images/movie2.png", "images/movie3.png", "images/movie4.png"]
        },
        {
            "title": "Desktop Voice Assistant",
            "description": "The Desktop Voice Assistant is a sophisticated application developed to function similarly to popular voice assistants like Siri and Google Assistant. This project, built using Python and PyQt5, enables users to perform various tasks through voice commands, enhancing productivity and accessibility. Users can interact with the system to get information, manage their schedule, control applications, and much more, all through natural language processing.",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/Desktop_Voice_Assistant",
                "website": ""
            },
            "languages": "Python: The core programming language used to develop the application. PyQt5: The library used for creating the graphical user interface (GUI). Speech Recognition: Libraries like Google's Speech Recognition API for converting speech to text. Natural Language Processing (NLP): Libraries such as spaCy or NLTK for understanding and processing natural language. Text-to-Speech (TTS): Libraries like pyttsx3 or gTTS for generating audible responses. Various APIs: For integrating functionalities like weather updates, news retrieval, and calendar management (e.g., OpenWeatherMap API, News API, Google Calendar API).",
            "work": "The Desktop Voice Assistant performs the following tasks: Voice Command Recognition: It uses speech recognition technologies to accurately interpret user voice commands. This includes basic commands like opening applications, setting reminders, searching the web, and more complex interactions. Natural Language Processing (NLP): The system processes the spoken language to understand and generate appropriate responses. This involves understanding the context, intent, and nuances of user commands. Task Execution: The assistant can execute a wide range of tasks such as: Opening and controlling software applications. Managing calendar events and reminders. Searching for information online and providing summaries. Sending emails and messages. Providing weather updates and news. Performing calculations and conversions. Text-to-Speech (TTS): The assistant uses text-to-speech technology to respond to user commands audibly, providing a natural and interactive experience. Integration with Other Services: The assistant integrates with various APIs and services to enhance functionality, such as weather services, news APIs, and calendar APIs.",
            "limitations": "Despite its advanced capabilities, the Desktop Voice Assistant has a few limitations: Accuracy: The accuracy of voice recognition and natural language understanding can vary based on the user's accent, pronunciation, and background noise. Complex Commands: While the system handles many common tasks, understanding and executing highly complex or ambiguous commands can be challenging. Dependency on APIs: The system's functionality often relies on external APIs and services, which may have usage limits, require subscriptions, or face downtime, impacting the overall user experience. Resource Intensive: Real-time voice processing and task execution can be resource-intensive, potentially affecting performance on lower-end hardware.",
            "images": ["images/auris1.png", "images/auris2.png", "images/auris3.png", "images/auris4.png", "images/auris5.png"]
        },
        {
            "title": "Spotify Clone",
            "description": "I developed a Spotify clone using React.js, JavaScript, and Tailwind CSS to replicate the core functionalities and user interface of the popular music streaming service. This project showcases my ability to build dynamic, responsive web applications with modern front-end technologies.React.js: Leveraged the power of React.js for efficient component-based architecture, ensuring smooth and fast user interactions.JavaScript: Implemented key features such as music playback, playlist management, and user authentication, emphasizing my proficiency in JavaScript.Tailwind CSS: Used Tailwind CSS to create a clean, responsive UI that mirrors Spotify's design, with a focus on user experience and accessibility.",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/Spotify-Clone",
                "website": "https://vaibhav-spotify-clone.netlify.app/"
            },
            "languages": "ReactJs: Leveraged the power of React.js for efficient component-based architecture, ensuring smooth and fast user interactions. JavaScript: Implemented key features such as music playback, playlist management, and user authentication, emphasizing my proficiency in JavaScript. Tailwind CSS: Used Tailwind CSS to create a clean, responsive UI that mirrors Spotify's design, with a focus on user experience and accessibility",
            "work": "",
            "limitations": "",
            "images": []
        },
        {
            "title": "BurNCode",
            "description": "I created a versatile Code Editor using React.js, JavaScript, Chakra UI, and the Piston API to provide a seamless coding experience directly in the browser. This project highlights my expertise in building interactive and responsive applications with modern web technologies. React.js: Utilized React.js to manage the editor's state and component structure, enabling efficient code execution and rendering. JavaScript: Implemented core functionalities, including syntax highlighting, code execution, and error handling, showcasing my JavaScript proficiency. Chakra UI: Designed the user interface with Chakra UI, ensuring a clean, accessible, and responsive design that enhances user interaction. Piston API: Integrated the Piston API to support multiple programming languages, allowing users to write, execute, and test code within the editor",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/CodeEditor",
                "website": "https://burncode.netlify.app/"
            },
            "languages": "ReactJs: Utilized React.js to manage the editor's state and component structure, enabling efficient code execution and rendering. JavaScript: Implemented core functionalities, including syntax highlighting, code execution, and error handling, showcasing my JavaScript proficiency. Chakra-Ui: Designed the user interface with Chakra UI, ensuring a clean, accessible, and responsive design that enhances user interaction. Piston-API: Integrated the Piston API to support multiple programming languages, allowing users to write, execute, and test code within the editor.",
            "work": "",
            "limitations": "",
            "images": []
        },
        {
            "title": "Rock Paper Scissors",
            "description": "The Rock, Paper, Scissors Game is a web-based interactive application developed using JavaScript, HTML, and CSS. This project allows users to play the classic game against the computer through a clean and responsive user interface. It implements the fundamental game logic to determine the winner based on the user's and the computer's choices.",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/RockPaperScissors.github.io/tree/master",
                "website": "https://vaibhav0x.github.io/RockPaperScissors.github.io/"
            },
            "languages": "JavaScript: For implementing the game logic, handling user interactions, and generating the computer's random choices. HTML: For structuring the webpage and creating the elements that the user interacts with. CSS: For styling the webpage and ensuring a visually appealing and responsive design.",
            "work": "The Rock, Paper, Scissors Game performs the following tasks: User Interface: The game features a simple and intuitive graphical user interface (GUI) built with PyQt5, where users can select their choice of rock, paper, or scissors. Game Logic: The game implements the core logic of Rock, Paper, Scissors: Rock beats Scissors Scissors beats Paper Paper beats Rock The game determines the winner by comparing the user's choice with the computer's randomly selected choice. Random Choice Generation: The computer's choice is generated randomly to ensure fair play. This adds an element of unpredictability to each round. Result Display: The game displays the result of each round (win, lose, or draw) to the user, along with the choices made by both the user and the computer. Score Tracking: The game tracks and displays the scores of both the user and the computer across multiple rounds, allowing users to see their performance over time. Reset and Play Again: Users can reset the game and play multiple rounds without restarting the application.",
            "limitations": "While the Rock, Paper, Scissors Game is engaging and functional, it has a few limitations: Limited Game Variations: The game includes only the basic Rock, Paper, Scissors variation. Advanced versions like Rock, Paper, Scissors, Lizard, Spock are not included. Single Player Mode: The game is designed for single-player mode only, where the user competes against the computer. Multiplayer mode (user vs. user) is not available. Basic AI: The computer's choices are purely random, with no advanced AI to make strategic decisions based on the user's previous selections.",
            "images": ["images/rock1.png", "images/rock2.png", "images/rock3.png", "images/rock4.png", "images/rock5.png"]
        },
        {
            "title": "Tic Tac Toe Game",
            "description": "The Tic Tac Toe Game is a web-based interactive application developed using HTML, CSS, and JavaScript. This project allows two players to play the classic game of Tic Tac Toe on a grid-based board. Players take turns marking their symbol (X or O) in the cells of the grid, aiming to get three of their symbols in a row, column, or diagonal.",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/TicTacToe.github.io/tree/master",
                "website": "https://vaibhav0x.github.io/TicTacToe.github.io/"
            },
            "languages": "HTML: For structuring the webpage, defining the game board, and creating clickable cells. CSS: For styling the game board, symbols (X and O), and overall visual design. JavaScript: For implementing the game logic, handling user interactions (click events), and determining game outcomes.",
            "work": "The Tic Tac Toe Game performs the following tasks: User Interface: The game features a responsive and visually appealing interface built with HTML for structure and CSS for styling. The game board consists of a 3x3 grid of cells where players can click to place their symbol (X or O). Game Logic: The core game logic is implemented using JavaScript: The game initializes with an empty grid where players can click to make their moves. JavaScript functions handle the placement of X or O based on the current player's turn. After each move, the game checks for a winning condition (three symbols in a row, column, or diagonal) or a draw (when all cells are filled without a winner). It alternates turns between Player X and Player O until a winner is determined or the game ends in a draw. Result Display: The game displays the result (winner or draw) after each game round, allowing players to see the outcome of their moves. Restart Option: Players have the option to restart the game after a win, draw, or when they want to start a new game. Responsive Design: The game's layout and elements are designed to be responsive, ensuring a consistent and enjoyable experience across different devices and screen sizes.",
            "limitations": "While the Tic Tac Toe Game is functional and provides an interactive gaming experience, it has a few limitations: Two-Player Mode Only: The game is designed for two players taking turns locally on the same device. Multiplayer mode over the internet is not implemented. Basic AI: The game does not include AI for a single-player mode against the computer. Implementing an AI opponent would require additional complexity and logic. Game Variations: The game follows the traditional Tic Tac Toe rules with a 3x3 grid. Variations like larger grids or different winning conditions (e.g., 4 in a row) are not included.",
            "images": ["images/tic1.png", "images/tic2.png", "images/tic3.png", "images/tic4.png", "images/tic5.png"]
        },
        {
            "title": "Titanic Survival Prediction",
            "description": "The Titanic Survival Prediction project aims to predict survival outcomes (whether a passenger survived or not) based on various factors using machine learning techniques. This project utilizes the famous Titanic dataset from Kaggle, which contains information about passengers aboard the Titanic, including demographics, ticket class, cabin, fare, and survival status.",
            "projectLinks": {
                "repository": "https://github.com/Vaibhav0x/Bharat_Intern_Data_Science",
                "website": ""
            },
            "languages": "Python: The primary programming language used for data analysis, visualization, and machine learning. Pandas: For data manipulation and preprocessing. NumPy: For numerical operations and array handling. Matplotlib and Seaborn: For data visualization and exploration. Scikit-learn: For implementing machine learning algorithms, model training, and evaluation. Jupyter Notebook: To create an interactive environment for running code, performing EDA, and documenting the analysis process.",
            "work": "The Titanic Survival Prediction project involves the following steps: Data Collection: Obtain the Titanic dataset from Kaggle, which includes both training and test datasets. The training dataset contains features along with the target variable (Survived), while the test dataset lacks the target variable and is used for making predictions. Exploratory Data Analysis (EDA): Data Exploration: Understand the structure of the dataset, examine features (columns), and understand their meanings. Statistical Summaries: Calculate basic statistical metrics (mean, median, min, max) for numerical features to identify outliers and understand distributions. Visualization: Use libraries like Matplotlib and Seaborn to create visualizations (histograms, bar charts, box plots, etc.) to explore relationships between features and their impact on survival. Data Cleaning and Preprocessing: Handling Missing Values: Identify missing values in the dataset and decide on appropriate strategies for imputation (using mean, median, mode, or advanced techniques like predictive imputation). Feature Engineering: Create new features from existing ones that might enhance the predictive power of the model (e.g., extracting titles from names, creating family size features). Encoding Categorical Variables: Convert categorical variables into numerical representations using techniques like one-hot encoding or label encoding. Feature Scaling: Scale numerical features if necessary to ensure they have a similar range, which can improve model performance. Model Selection and Training: Splitting Data: Split the training dataset into training and validation sets to evaluate model performance. Selecting Algorithms: Choose suitable machine learning algorithms (e.g., Logistic Regression, Decision Trees, Random Forest, Gradient Boosting) based on the problem type (classification) and dataset characteristics. Training Models: Train multiple models using training data and evaluate their performance using validation data (e.g., accuracy, precision, recall, ROC-AUC). Model Evaluation and Fine-Tuning: Performance Metrics: Evaluate models using appropriate performance metrics (accuracy, precision, recall, F1-score) and visualize results using confusion matrices or ROC curves. Hyperparameter Tuning: Use techniques like Grid Search or Random Search to optimize model hyperparameters for improved performance. Cross-Validation: Implement cross-validation techniques to ensure the model's generalizability and robustness. Prediction and Submission: Making Predictions: Use the trained model to predict survival outcomes on the test dataset. Submission: Prepare predictions in the required format and submit them to Kaggle for evaluation and scoring.",
            "limitations": "",
            "images": []
        },
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const projectIndex = urlParams.get('project');


    if (projectIndex !== null && projects[projectIndex]) {
        const project = projects[projectIndex];
        console.log(project[projectIndex]);
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').textContent = project.description;
        document.getElementById('project-work').textContent = project.work;
        document.getElementById('project-limitations').textContent = project.limitations;

        // Display project links
        const projectLinksContainer = document.getElementById('project-links');
        projectLinksContainer.innerHTML = ''; // Clear previous content

        // Display Images
        const gallery = document.getElementById('gallery');
        project.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.style.width = '400px'; // Adjust size as needed
            imgElement.style.height = '300px'; // Adjust size as needed
            imgElement.style.margin = '5px';

            gallery.appendChild(imgElement);
        });
        // Create and append link elements
        const repositoryLink = document.createElement('a');
        repositoryLink.href = project.projectLinks.repository;
        repositoryLink.textContent = '  Repository Link';
        repositoryLink.target = '_blank'; // Open link in new tab
        repositoryLink.style.marginRight = '10px'; // Optional styling


        // Check if website link exists before creating and appending it
        if (project.projectLinks.website) {
            const websiteLink = document.createElement('a');
            websiteLink.href = project.projectLinks.website;
            websiteLink.textContent = 'Live Project  ';
            websiteLink.target = '_blank'; // Open link in new tab
            projectLinksContainer.appendChild(websiteLink);
        }
        projectLinksContainer.appendChild(repositoryLink);
        projectLinksContainer.appendChild(websiteLink);

    } else {
        document.getElementById('project-title').textContent = 'Project not found';
    }
});