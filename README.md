# Code assessment analysis

## Basic structure
This project is organized into three layers:

1. Web API Layer: Handles receiving and responding to requests from the frontend or other microservices.
2. Business Layer: Manages the business logic.
3. Data Layer: Performs database operations.

## Challenges 
My primary challenge is my lack of familiarity with Visual Studio, having last used it a few years ago. I spent too much time realizing that I couldn't use VS Code to run the project. Additionally, the specific .NET version required is problematic; I attempted to install it on my Mac, but it wouldn't run, forcing me to use a Windows PC to execute the code.
Besides the configuration issues, there are other challenges. 
1. I'm not sure why the controller takes a string as parameter, it's give me issues so I changed it to object.
2. It has many models, based on my experience, it is great to have multiple models for different use cases, but if it't too many, it will add unnecessary complexity. It is very confusing what I need to set on my request body, a more detailed documentation would be really helpful.

Due to the lack of time I have, I only completed some of the requirements. 

1. I didn't finish all company controller functions, only a post endpoint is finished, probably with issues. Because I'm not sure what should I send for my request. 
2. Asynchronous I added, but only to webapi and business layer. Because data layer uses a static list as fake database, I just assume add async to controller is enough.
3. I didn't finish it, but the logic will be similar to Company logics
4. I didn't finish it, but the logic will be similar to Company logics
5. I didn't finish it, but based on my experience, use this Microsoft.Extensions.Logging.ILogger class can easily add the logging feature. 

I have done some personal project using dotnet 8, please use this link as reference: https://github.com/hoooowsh/LifeRec-Categories. It has controler, business logic and database operations, but in a single layer. It also contains unit tests and logger and other cicd stuff. 
