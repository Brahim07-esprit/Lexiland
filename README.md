Lexiland
========

Lexiland is a Django-based educational platform designed to support dyslexic children by simplifying reading, writing, and comprehension tasks. The platform leverages Natural Language Processing (NLP) techniques and custom image processing to transform user-input text into visual content, significantly improving reading comprehension by 70%. It also applies machine learning algorithms for dyslexia classification, OCR optimization, and handwriting recognition, increasing classification accuracy by 40%.

Table of Contents
-----------------

*   [Features](#features)
    
*   [Demo](#demo)
    
*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Technologies Used](#technologies-used)
    
*   [Project Structure](#project-structure)
    
*   [Contributing](#contributing)
    
*   [License](#license)
    
*   [Acknowledgements](#acknowledgements)
    

Features
--------

*   **Simplified Reading and Writing**: Enhances reading, writing, and comprehension abilities for dyslexic children.
    
*   **Visual Content Transformation**: Uses NLP and custom image processing to convert text into visual content.
    
*   **Dyslexia Classification**: Implements machine learning algorithms (SVM, Decision Tree, CNN, RNN, LSTM) for accurate dyslexia classification.
    
*   **OCR Optimization and Handwriting Recognition**: Improves OCR performance and supports handwriting recognition.
    

Demo
----

https://github.com/user-attachments/assets/4e878b9a-a2f0-485b-9a3d-2c2130ddce9e


Installation
------------

### Prerequisites

*   **Python 3.11**
    
*   **Virtual Environment Tool** (e.g., venv or virtualenv)
    

### Steps

1.  bashCopy codegit clone https://github.com/yourusername/lexiland.git
    
2.  bashCopy codecd lexiland
    
3.  bashCopy codepython3.11 -m venv venv
    
4.  **Activate the Virtual Environment**
    
    *   bashCopy codevenv\\Scripts\\activate
        
    *   bashCopy codesource venv/bin/activate
        
5.  bashCopy codepip install -r requirements.txt**Contents of requirements.txt:**Copy codedjangochannelstransformersnltkbs4pillowgoogletransopencv-pythoninferencesetuptoolswheelnumpytensorflowultralyticsmltu
    
6.  bashCopy codepython manage.py migrate
    
7.  bashCopy codepython manage.py runserver
    

Usage
-----

1.  Open your web browser and navigate to http://localhost:8000/.
    
2.  Create a new account or log in with existing credentials.
    
3.  **Use the Features**
    
    *   **Text Transformation**: Input text to transform it into visual content.
        
    *   **Dyslexia Assessment**: Utilize the assessment tools for classification.
        
    *   **Handwriting Recognition**: Upload handwriting samples for recognition.
        
4.  Explore additional features designed to aid learning and comprehension.
    

Technologies Used
-----------------

*   **Python 3.11**
    
*   **Django**: Web framework for the backend.
    
*   **NLTK**: Natural Language Processing toolkit.
    
*   **Machine Learning Libraries**: scikit-learn, TensorFlow, Keras.
    
*   **OpenCV**: Image processing library.
    
*   **Ultralytics**: Advanced computer vision tasks.
    
*   **MLTU**: Machine Learning Tools and Utilities.
    
*   **Frontend**: HTML, CSS, JavaScript, Bootstrap.
    

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Copy codelexiland/  ├── avatar/  │   ├── answers/  │   ├── documents/  │   └── node_modules/  ├── avatar_image/  ├── avatar_videos/  ├── lexiland/  │   ├── settings.py  │   ├── urls.py  │   └── wsgi.py  ├── media/  │   └── images/  ├── templates/  │   ├── assets/  │   └── forms/  └── Webpage/   `

_Note: This is a simplified version. Replace it with your actual project structure if different._

Contributing
------------

Contributions are welcome! Please follow these steps:

1.  **Fork the Repository**
    
2.  bashCopy codegit checkout -b feature/YourFeature
    
3.  bashCopy codegit commit -m "Add some feature"
    
4.  bashCopy codegit push origin feature/YourFeature
    
5.  **Open a Pull Request**
    

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Acknowledgements
----------------

*   **NLTK** for providing powerful NLP tools.
    
*   **Django** for the robust web framework.
    
*   **Contributors** who have helped improve the project.
