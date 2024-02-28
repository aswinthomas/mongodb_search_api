# MongoDB Search API

This project provides an API for performing search operations using MongoDB and Algolia, offering a seamless integration to leverage the best of both databases and search services.

## Introduction

The MongoDB Search API is designed to facilitate advanced search capabilities in applications requiring high-performance full-text search. It utilizes MongoDB as the primary database for storing data and Algolia for indexing and searching to ensure fast and relevant search results.

## Setup

### Prerequisites

- Node.js
- MongoDB
- Algolia Account

### Installation

1. Clone the repository

```bash
git clone https://github.com/aswinthomas/mongodb_search_api.git
```
2. Navigate to the project directory and install dependencies:
   
```bash
cd mongodb_search_api
npm install
```

## Configuration

1. Set up your MongoDB database and obtain your connection URI.
2. Configure your Algolia account and get your Application ID and Admin API Key.
3. Create a `.env` file in the project root and add your MongoDB URI and Algolia credentials:

```
MONGODB_URI=your_mongodb_uri
ALGOLIA_APP_ID=your_algolia_app_id
ALGOLIA_API_KEY=your_algolia_admin_api_key
```

## Usage

- Start the application: `npm start`
- The API endpoints will be available for performing search operations and managing indices.
