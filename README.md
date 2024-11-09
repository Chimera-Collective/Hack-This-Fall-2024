  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

# AllergyIQ

Your AI-driven dietary detection companion that scans ingredients through text, URLs, or photos to instantly identify potential allergens and dietary restrictions, ensuring safer food choices .

## About The Project

AllergyIQ bridges the gap between health requirements and cultural dietary practices, making it easier to maintain both without compromise. The application leverages advanced AI technology to provide comprehensive ingredient analysis and allergen detection through multiple input methods .

### Built With

* [![React][React.js]][React-url]
* [![Vite][Vite.js]][Vite-url]
* [![TypeScript][TypeScript.js]][TypeScript-url]
* [![MongoDB][MongoDB.js]][MongoDB-url]
* [![Google Cloud][GoogleCloud.js]][GoogleCloud-url]

## Getting Started

### Prerequisites

* npm
```sh
npm install npm@latest -g
```

### Installation

1. Get API Keys for:
   - Google Gemini API
   - Google Cloud Vision API
   - MongoDB Atlas

2. Clone the repo
```sh
git clone https://github.com/your_username/AllergyIQ.git
```

3. Install NPM packages
```sh
npm install
```

4. Configure your environment variables
```js
MONGODB_URI=your_mongodb_uri
GEMINI_API_KEY=your_gemini_key
CLOUD_VISION_API_KEY=your_vision_key
```

## Core Features

### Multi-Mode Input System
- Text input for ingredient lists
- URL import for recipe scanning
- Photo capture for label detection 

### Intelligent Analysis
- Allergen identification
- Cultural dietary compliance
- Real-time risk assessment 

## Technical Architecture

### MongoDB Implementation
The database architecture consists of two primary collections:
- Ingredient Analysis Collection
- Dietary Rules Collection 

### AI Integration
The application combines:
- Google Cloud Vision API for OCR
- Google Gemini API for ingredient analysis 

## Contributing

### Development Team
- Andy Huynh
- Bernard Martis
- Dakota Heizman
- Silver Alcid 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Project Link: [https://github.com/your_username/AllergyIQ](https://github.com/your_username/AllergyIQ)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[TypeScript.js]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[MongoDB.js]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[GoogleCloud.js]: https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[GoogleCloud-url]: https://cloud.google.com/

Citations:
  https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/31112838/69acb6ad-b20a-46db-a7c6-d21bfeba71c3/paste.txt
