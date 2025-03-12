// promptData.js
const promptData = [
  {
    category: "Broccoli",
    prompts: [
      {
        title: "Broccoli Recipes",
        content: "Generate a list of 5 creative and delicious recipes featuring broccoli as the main ingredient. Include diverse cooking methods and flavor profiles that appeal to various palates."
      },
      {
        title: "Broccoli Growing Guide",
        content: "Create a comprehensive guide for growing broccoli at home, including optimal soil conditions, watering schedule, pest management, and harvesting tips for maximum yield."
      },
      {
        title: "Broccoli Nutrition Facts",
        content: "Compile detailed nutritional information about broccoli, highlighting its health benefits, vitamin content, and potential impact on various aspects of health and wellness."
      }
    ]
  },
  {
    category: "Astrology",
    prompts: [
      {
        title: "Generate Personalized Horoscope",
        content: "Act as an experienced astrologer. Generate a personalized horoscope for an individual based on their sun, moon, and rising signs. This horoscope should provide insightful, tailored advice on personal growth, challenges, love, career, and well-being, and include clear strategies for navigating obstacles and maximizing favorable alignments."
      },
      {
        title: "Interpret Natal Chart",
        content: "Act as an experienced astrologer. Interpret an astrological chart with precision and insight, providing a comprehensive analysis that covers planetary positions, houses, and significant patterns. Offer guidance on how these influences might impact the client's personal life, career, and relationships, ensuring your analysis is enlightening and accessible."
      },
      {
        title: "Predict Astrological Trends",
        content: "Act as an experienced astrologer tasked with predicting astrological trends for the upcoming year using planetary transits. Your predictions should cover aspects of life including love, career, health, and personal growth, providing actionable advice for making the most of these cosmic shifts."
      },
      {
        title: "Write Daily, Weekly, or Monthly Horoscopes",
        content: "As an experienced astrologer, write compelling daily, weekly, and monthly horoscopes tailored for a specific audience. Use your deep knowledge of planetary movements to offer guidance, inspiration, and timely warnings, ensuring your predictions are detailed and accessible."
      },
      {
        title: "Generate Compatibility Report",
        content: "Act as an experienced astrologer to generate a detailed compatibility report for a couple based on their astrological charts. Analyze aspects such as sun, moon, and Venus placements to highlight areas of harmony and conflict, and provide constructive advice for strengthening their relationship."
      },
      {
        title: "Suggest Crystals, Rituals, or Practices",
        content: "Act as an experienced astrologer with knowledge of crystals, rituals, and practices. Provide personalized suggestions based on the client's astrological alignments to enhance well-being, attract positive energies, and navigate life challenges effectively."
      },
      {
        title: "Create Detailed Zodiac Sign Description",
        content: "Act as an experienced astrologer. Write a detailed description of a given zodiac sign focusing on key characteristics, strengths, weaknesses, compatibility, and unique traits. Provide actionable advice for individuals of that sign to maximize their strengths and overcome challenges."
      }
    ]
  },
  {
    category: "Coloring Books",
    prompts: [
      {
        title: "Brainstorm Themes",
        content: "Act as a coloring book artist. Generate a list of unique and innovative themes for a coloring book centered around a specified topic. Ensure that each theme is creative, engaging, and offers varied coloring opportunities for a diverse audience."
      },
      {
        title: "Suggest Seasonal Themes",
        content: "Brainstorm seasonal themes for a coloring book based on a specific holiday. Consider colors, symbols, and imagery associated with the holiday to create engaging and fun coloring pages."
      },
      {
        title: "Suggest Storyline",
        content: "Develop an engaging storyline that can be illustrated in a coloring book based on the given theme. The storyline should be appropriate for all ages and divided into clear sections that guide the reader through a cohesive narrative."
      },
      {
        title: "Create Characters",
        content: "Create unique and engaging characters for a coloring book based on a given storyline. Design characters with distinct personalities and features that are both visually appealing and easy to color."
      },
      {
        title: "Create Flow of Images",
        content: "Design a sequence of images that tell a story based on the provided storyline for a coloring book. Ensure the images are connected, engaging, and clearly convey the narrative to the reader."
      },
      {
        title: "Generate Images",
        content: "Create a detailed and engaging image for a coloring book based on the provided description. Use vibrant colors and intricate designs to make the image appealing and enjoyable for all ages."
      }
    ]
  },
  {
    category: "Filmmaking",
    prompts: [
      {
        title: "Scout Locations",
        content: "Act as an experienced filmmaker. Research and compile a list of potential filming locations that closely resemble a given location. Provide detailed descriptions, photos, potential challenges, and any permit or cost information."
      },
      {
        title: "Generate Ideas",
        content: "Generate a list of high-concept film ideas centered around a specified topic. Each idea should include a strong premise, compelling characters, and a clear narrative arc."
      },
      {
        title: "Develop Characters",
        content: "Develop detailed backstories for protagonists or antagonists based on a given character description. Create rich, multi-layered narratives that enhance the character's role in the film."
      },
      {
        title: "Structure Plot",
        content: "Outline a three-act structure for a film based on a given description. Include a clear setup, conflict, and resolution with key plot points, character development, and thematic elements."
      },
      {
        title: "Breakdown a Scene",
        content: "Analyze a provided scene description and break it down to identify necessary props, dialogue cues, and actions. Ensure that all essential elements are noted for effective scene execution."
      },
      {
        title: "Create Marketing Strategy",
        content: "Develop a comprehensive marketing strategy for a film on a given topic. Conduct market research, identify target audiences, and propose a campaign using traditional and digital tactics."
      },
      {
        title: "Suggest Cast",
        content: "Provide suggestions for casting a character based on a provided description. Consider personality traits, physical attributes, and chemistry with other cast members to ensure a perfect fit."
      }
    ]
  },
  {
    category: "Music",
    prompts: [
      {
        title: "Suggest Song Structure",
        content: "Act as an Academy Award-winning musician. Suggest a structure for a song about a given topic, including the number of verses, choruses, and placement of a bridge, while considering rhythm, melody, and harmony."
      },
      {
        title: "Generate Lyrics",
        content: "Generate a profound and musically aligned verse about a given topic. The verse should be engaging, emotionally resonant, and work well with various musical arrangements."
      },
      {
        title: "Assist with Rhymes",
        content: "Come up with a diverse list of words that rhyme with a specified word. Include both simple and multisyllabic words that could be used for songwriting or poetry."
      },
      {
        title: "Write Chorus",
        content: "Write a catchy and resonant chorus for a new song on a given topic and style. The chorus should be easy to sing along to and encapsulate the overall theme of the song."
      },
      {
        title: "Create Melody",
        content: "Develop a captivating melody for a specified type of song in a given tone. The melody should be original, memorable, and emotionally impactful, complementing the song's lyrics and theme."
      },
      {
        title: "Suggest Chord Progression",
        content: "Suggest a creative chord progression for a specific verse type in a new song. Explain your rationale, including the key and sequence of chords, ensuring the progression enhances the emotional resonance of the song."
      }
    ]
  },
  {
    category: "Photography",
    prompts: [
      {
        title: "Create Theme Ideas for Shoots",
        content: "Brainstorm and generate creative themes for a photoshoot centered around a given topic. Consider mood, tone, and overall aesthetics to tell a compelling visual story."
      },
      {
        title: "Suggest Color Schemes",
        content: "Provide suggestions for color schemes for a specific type of photo shoot. Consider lighting, background, and mood to enhance the overall look and feel of the images."
      },
      {
        title: "Write Portfolio Description",
        content: "Write a compelling description for a photography series focusing on a given topic. Explain the inspiration, theme, and unique approach that sets the series apart."
      },
      {
        title: "Suggest SEO-Friendly Titles",
        content: "Generate an SEO-friendly title for a photo related to a given topic. The title should incorporate relevant keywords while accurately describing the content of the photo."
      },
      {
        title: "Draft Emails to Clients",
        content: "Draft a professional email to a client discussing photography services related to a specified topic. The email should be engaging, informative, and tailored to the client's needs."
      }
    ]
  },
  {
    category: "Airbnb",
    prompts: [
      {
        title: "Respond to Reviews",
        content: "Craft a response to a guest's review on the Airbnb platform. Your response should be professional, polite, and empathetic, addressing any compliments or complaints and inviting future bookings."
      },
      {
        title: "Write Property Description",
        content: "Write an enticing and accurate property description for an Airbnb listing. Highlight the unique features, amenities, and local attractions, and create a welcoming tone for potential guests."
      },
      {
        title: "Generate Outline for the Welcome Book",
        content: "Create an outline for a comprehensive welcome book for an Airbnb property. Include sections on amenities, local attractions, house rules, emergency contacts, and personalized recommendations."
      },
      {
        title: "Write Health and Safety Measures",
        content: "Draft comprehensive health and safety measures for an Airbnb property listing. Clearly explain the protocols in place to ensure guests' well-being, including cleaning procedures and contactless options."
      },
      {
        title: "Craft Guides for Local Attractions",
        content: "Craft a guide for local attractions near an Airbnb property. Provide valuable insights and recommendations, mixing popular tourist spots with hidden gems to enhance the guest experience."
      },
      {
        title: "Respond to Guest Inquiries",
        content: "Write a friendly and informative response to a guest's inquiry about their upcoming Airbnb stay. Include details on the property, check-in procedures, and any other essential information."
      },
      {
        title: "Improve Guest Stays",
        content: "Brainstorm innovative ideas to enhance the guest experience at an Airbnb property. Consider comfort, amenities, décor, and local experiences to create a memorable and unique stay."
      }
    ]
  },
  {
    category: "Branding",
    prompts: [
      {
        title: "Suggest Brand Names",
        content: "Generate a list of 10 unique and creative brand names for a given company description. Ensure the names align with the brand identity, resonate with the target market, and are memorable."
      },
      {
        title: "Craft Mission and Vision Statements",
        content: "Write mission and vision statements for a given company description. The mission statement should articulate the company's purpose, while the vision statement should outline its future ambitions."
      },
      {
        title: "Create Logo Design Concepts",
        content: "Suggest five unique concepts for a logo based on a company description. Provide a brief explanation for each idea, including the rationale behind the design choices and how they align with the brand's identity."
      },
      {
        title: "Generate Color Scheme",
        content: "Recommend a versatile color palette that conveys the brand's personality and values based on a given brand description. Explain the significance of each color choice."
      },
      {
        title: "Research Market Trends",
        content: "Summarize the latest market trends in a specified industry, highlighting key changes, opportunities, and implications for the business."
      },
      {
        title: "Plan Long-Term Positioning",
        content: "Outline a 5-year brand positioning plan for a given company. Include unique selling propositions, target audiences, key performance indicators, and tactical approaches for differentiation and growth."
      },
      {
        title: "Write a Brand Story",
        content: "Craft a compelling brand story that encapsulates the company's history, mission, values, and achievements in an engaging narrative that connects emotionally with the audience."
      }
    ]
  },
  {
    category: "Business Ideas",
    prompts: [
      {
        title: "Generate New Product Ideas",
        content: "Brainstorm 5 innovative product ideas for a specified type of product. Each idea should address a gap in the market, include a brief description, target audience, and highlight its unique selling proposition."
      },
      {
        title: "Research Growing Markets",
        content: "Identify three rapidly growing sectors within a specified industry and provide a detailed analysis of trends, market demands, technological advancements, and potential growth projections."
      },
      {
        title: "Validate Business Idea",
        content: "Conduct a comprehensive analysis to assess the viability, market potential, and scalability of a given business idea. Include market research, competitive analysis, and financial projections with strategic recommendations."
      },
      {
        title: "Create Business Plan",
        content: "Develop a comprehensive business plan for a specified business idea. The plan should include an executive summary, market analysis, marketing strategy, operational plan, organizational structure, and a detailed financial plan."
      },
      {
        title: "Generate New Business Ideas",
        content: "Generate 5 innovative business ideas within a specified niche, each with a unique value proposition, a brief overview, and an explanation of how the idea addresses a gap in the market."
      }
    ]
  },
  {
    category: "Course Creation",
    prompts: [
      {
        title: "Assist in Research",
        content: "Provide a comprehensive summary of the latest studies, news, and developments on a specific topic to update or create course content that is current and informative for learners."
      },
      {
        title: "Outline Course Syllabus",
        content: "Develop a detailed, week-by-week course syllabus on a specified topic. Include learning objectives, required readings, and a mix of lectures, discussions, and hands-on activities."
      },
      {
        title: "Suggest Discussion Topics",
        content: "Develop a list of engaging and thought-provoking discussion topics related to a given subject. The topics should stimulate critical thinking and interactive participation among learners."
      },
      {
        title: "Give Feedback on Assignments",
        content: "Review and provide detailed, constructive feedback on a provided assignment, focusing on structure, clarity, engagement, and educational value."
      },
      {
        title: "Create an Interactive Quiz",
        content: "Design a comprehensive quiz on a specified topic that includes multiple-choice, true/false, and short answer questions. Include feedback for each question to aid learning."
      },
      {
        title: "Suggest Supplemental Materials",
        content: "Identify and recommend additional resources (books, articles, videos, podcasts) that complement a given course topic and enhance the overall learning experience."
      },
      {
        title: "Draft a Script for a Video",
        content: "Write a clear and engaging script for a lecture or video on a specified topic. The script should include an introduction, main content, and a conclusion with a call to action."
      },
      {
        title: "Create Personalized Learning Tips",
        content: "Develop personalized learning strategies and tips based on a student’s learning style, strengths, and areas for improvement in a given subject."
      }
    ]
  },
  {
    category: "Dropshipping",
    prompts: [
      {
        title: "Find Trending Products",
        content: "Identify trending products within a specified niche by analyzing market trends, customer behavior, and competitor research. Provide detailed insights into product demand and potential profitability."
      },
      {
        title: "Write Product Description",
        content: "Craft a compelling product description for a dropshipping item that highlights its features, benefits, and unique selling propositions to entice potential buyers."
      },
      {
        title: "Find Suppliers for a Product",
        content: "Research and identify reliable and cost-effective suppliers for a specified product. Evaluate each supplier's capacity, quality control, and pricing, and provide a detailed report with recommendations."
      },
      {
        title: "Generate Social Media Content",
        content: "Create a week's worth of engaging social media content ideas to promote a specified product. Include ideas for posts, videos, and stories with a mix of educational and promotional angles."
      },
      {
        title: "Draft Email Marketing Campaigns",
        content: "Draft a series of persuasive email marketing campaigns aimed at promoting a specific dropshipping product. The campaign should include a clear call-to-action and be tailored to a targeted audience."
      },
      {
        title: "Analyze Competition",
        content: "Conduct a detailed analysis of competitors in the dropshipping market for a given product. Evaluate their product range, pricing, and marketing tactics, and provide actionable recommendations to gain a competitive edge."
      }
    ]
  },
  {
    category: "Etsy",
    prompts: [
      {
        title: "Write Product Description",
        content: "Compose a compelling product description for an Etsy listing based on provided product details. Highlight the product's unique features, craftsmanship, and appeal to potential buyers."
      },
      {
        title: "Suggest SEO Keywords",
        content: "Generate a list of SEO-friendly keywords to be included in an Etsy listing for a specified product. The keywords should be relevant, high-ranking, and improve the product's visibility on Etsy."
      },
      {
        title: "Create FAQ Section",
        content: "Develop a comprehensive FAQ section for an Etsy shop that covers common questions about the product, shipping, returns, and custom orders, ensuring clarity and building customer trust."
      },
      {
        title: "Draft Response Templates",
        content: "Write professional and courteous response templates for customer inquiries on Etsy. These templates should address various common concerns and maintain a friendly tone."
      },
      {
        title: "Handle Negative Reviews",
        content: "Craft an empathetic and solution-oriented response to negative customer reviews on Etsy. Acknowledge the customer's concerns, apologize for any issues, and propose a resolution to maintain a positive reputation."
      },
      {
        title: "Draft Personalized Thank You Message",
        content: "Write a personalized thank-you message to customers who have purchased from your Etsy shop. The message should express gratitude, offer additional support, and encourage future purchases."
      },
      {
        title: "Write Story for Product",
        content: "Craft a short, engaging story that explains the inspiration behind a product listed on Etsy. The story should connect emotionally with customers and enhance the product's appeal."
      },
      {
        title: "Create Social Media Posts",
        content: "Develop creative and engaging social media post ideas for promoting an Etsy product. The posts should be designed to increase brand awareness and drive traffic to the Etsy listing."
      }
    ]
  },
  {
    category: "Event Planning",
    prompts: [
      {
        title: "Brainstorm Event Themes",
        content: "Brainstorm unique and innovative event themes for a given topic. Consider factors like venue, audience, and objectives to create a memorable and engaging event experience."
      },
      {
        title: "Plan Event Budget",
        content: "Create a comprehensive budget and cost breakdown for an upcoming event. Include expenses such as venue, catering, entertainment, marketing, and any additional services required."
      },
      {
        title: "Create Event Schedule",
        content: "Develop a detailed event timeline that includes all phases from pre-event planning, setup, execution, to teardown. Include key activities, timings, and contingency plans."
      },
      {
        title: "Delegate Tasks",
        content: "Suggest strategies for task delegation among team members for a large-scale event. Outline responsibilities, establish communication channels, and set deadlines for each task."
      },
      {
        title: "Help with Decoration and Styling Tips",
        content: "Provide comprehensive decor ideas and styling tips for a specific type of event. Include suggestions for color schemes, lighting, table arrangements, and focal points to create a cohesive look."
      },
      {
        title: "Suggest Entertainment",
        content: "Recommend suitable entertainment options for a specified event type. Consider the audience, venue capacity, and overall tone of the event to ensure the entertainment aligns with the event's objectives."
      },
      {
        title: "Promote Event",
        content: "Develop a detailed marketing plan for an event, including social media, email campaigns, and influencer partnerships. Ensure the plan builds anticipation and maximizes event attendance."
      }
    ]
  },
  {
    category: "Excel",
    prompts: [
      {
        title: "Explain How Excel Function Works",
        content: "Act as a proficient Excel user and explain how a specified Excel function works in a clear, step-by-step manner. Include examples and best practices for its use."
      },
      {
        title: "Explain How to Use Excel Functions",
        content: "Create a step-by-step guide on how to use a particular Excel function to perform a specific action. Include screenshots or examples to illustrate each step."
      },
      {
        title: "Write Excel Commands",
        content: "Write an Excel command to perform a given action, providing necessary explanations to ensure the command is easily understood and executable."
      },
      {
        title: "Write Macros",
        content: "Develop a VBA Excel macro that automates a specific task within a spreadsheet. Ensure the macro is user-friendly and thoroughly tested for functionality."
      },
      {
        title: "Perform Complex Tasks",
        content: "Follow detailed task instructions to perform a complex operation in Excel, such as data analysis or report generation, ensuring accuracy and efficiency."
      },
      {
        title: "Turn ChatGPT Into a Useful Excel Assistant",
        content: "Provide step-by-step instructions to complete a specific Excel task, such as creating a pivot table or formatting data, serving as a helpful Excel assistant."
      }
    ]
  },
  {
    category: "Goal Setting",
    prompts: [
      {
        title: "Structure Goals",
        content: "Act as a goal setting expert. Break down a list of provided goals into actionable steps with timelines and milestones, ensuring each goal is Specific, Measurable, Achievable, Relevant, and Time-bound (SMART)."
      },
      {
        title: "Plan & Track Goals",
        content: "Develop a detailed action plan to track a list of provided goals. Include tasks, milestones, timelines, and responsible parties to ensure progress and accountability."
      },
      {
        title: "Brainstorm Goals",
        content: "Brainstorm clear and achievable goals for a specific area of life. Provide a list of SMART goals along with actionable steps for each goal."
      },
      {
        title: "Help With Self-Reflection",
        content: "Design a comprehensive session with guided questions to facilitate deep self-reflection on a list of provided goals, helping to identify motivations and necessary actions."
      },
      {
        title: "Provide Motivation & Accountability",
        content: "Create personalized affirmations based on a list of provided goals to motivate and build confidence, ensuring the affirmations are actionable and encourage progress."
      }
    ]
  },
  {
    category: "Market Research",
    prompts: [
      {
        title: "Suggest Research Methodologies",
        content: "Develop a comprehensive list of market research methodologies to gather insights about a specified product or service, including surveys, focus groups, interviews, and data analytics."
      },
      {
        title: "Gather Public Data",
        content: "Compile comprehensive public data on a given product/service and its target audience by analyzing market trends, consumer surveys, and industry reports."
      },
      {
        title: "Create Customer Personas",
        content: "Develop detailed customer personas for a specified product/service by analyzing demographics, psychographics, behavior patterns, and purchase motivations."
      },
      {
        title: "Identify Market Gaps",
        content: "Conduct a thorough analysis to identify existing market gaps where a specified product/service could make a significant impact. Provide actionable recommendations for market entry."
      },
      {
        title: "Find Competitors",
        content: "Identify potential direct and indirect competitors for a given product/service by conducting comprehensive market analysis and compiling a detailed competitor profile."
      }
    ]
  },
  {
    category: "Newsletter",
    prompts: [
      {
        title: "Draft Opinion Piece",
        content: "Write an engaging and persuasive opinion piece on a given topic for a newsletter, backed up by relevant facts, statistics, and a clear call-to-action at the end."
      },
      {
        title: "Provide Industry Updates",
        content: "Summarize the latest developments in a specified sector for a newsletter, offering concise yet comprehensive insights that capture the interest of the audience."
      },
      {
        title: "Summarize Interview",
        content: "Summarize a recent interview by capturing key points, insights, and highlights in a concise format suitable for a newsletter issue."
      },
      {
        title: "Edit & Proofread",
        content: "Edit and proofread an upcoming newsletter issue for clarity, coherence, and grammar, ensuring it aligns with the brand’s voice and style guidelines."
      },
      {
        title: "Generate Catchy Headlines",
        content: "Generate 5 catchy headlines for a newsletter article about a specified topic, ensuring each headline is engaging, SEO-friendly, and encourages readership."
      },
      {
        title: "Write Engaging Intro",
        content: "Craft an engaging introduction for a newsletter story on a specified topic that hooks readers and provides a brief overview without giving too much away."
      }
    ]
  },
  {
    category: "Product Management",
    prompts: [
      {
        title: "Perform Market Research",
        content: "Conduct comprehensive market research based on a given product description. Identify target markets, competitors, and customer needs to inform product strategy."
      },
      {
        title: "Build a Pricing Strategy",
        content: "Develop a pricing strategy for a specified product by analyzing market conditions, production costs, and competitive benchmarks. Use a value-based approach to justify the price."
      },
      {
        title: "Create Customer Personas",
        content: "Develop detailed customer personas for a given product, including demographics, behavior patterns, and motivations, to inform marketing and product development strategies."
      },
      {
        title: "Create a Product Roadmap",
        content: "Outline a comprehensive product roadmap for a new product, detailing key milestones from market research through prototype development, testing, beta release, and official launch."
      },
      {
        title: "Write User Stories",
        content: "Craft detailed user stories for a given product using the format 'As a [user], I want [action] so that [benefit]. Ensure the stories are prioritized and aligned with the product’s strategic goals."
      },
      {
        title: "Analyze Customer Feedback",
        content: "Analyze provided customer feedback entries to identify patterns and insights that can inform product enhancements. Prioritize feedback based on impact and provide actionable recommendations."
      }
    ]
  },
  {
    category: "Project Management",
    prompts: [
      {
        title: "Create Project Blueprint for a Team",
        content: "Develop a comprehensive project blueprint that outlines objectives, scope, deliverables, timelines, budget, and resource allocation based on a provided project description."
      },
      {
        title: "Conduct Risk Analysis",
        content: "Create a detailed risk analysis document for a specified project, identifying potential risks, assessing their impact, and outlining mitigation strategies for each."
      },
      {
        title: "Help With Meetings",
        content: "Create a Post Project Evaluation Template that includes sections for project overview, objectives, budget, team performance, challenges, lessons learned, and recommendations for future projects."
      },
      {
        title: "Prioritize Project Tasks",
        content: "Evaluate and rank a provided list of project tasks based on urgency, importance, and resource requirements. Provide a suggested order and rationale for task prioritization."
      }
    ]
  },
  {
    category: "Real Estate",
    prompts: [
      {
        title: "Generate Property Descriptions",
        content: "Write a compelling property description for a specified real estate listing. Highlight unique features, amenities, location benefits, and any special aspects that set the property apart."
      },
      {
        title: "Highlight Neighborhood Features",
        content: "Create content that emphasizes the unique neighborhood features of a property, including schools, parks, shopping centers, and cultural attractions to attract potential buyers or renters."
      },
      {
        title: "Assist with Tenant Screening",
        content: "Develop a comprehensive tenant screening criteria checklist for a specified property type. Include factors like credit score, income verification, rental history, and background checks."
      },
      {
        title: "Write Automated Responses",
        content: "Craft a professional response to inquiries about a property, detailing features, location, price, and other relevant details, while inviting potential buyers for further engagement."
      },
      {
        title: "Analyze Price Trends",
        content: "Analyze historical price trends for a specific type of property in a given area, highlighting patterns, average price per square foot, and potential future trends."
      },
      {
        title: "Perform Comparative Market Analysis",
        content: "Generate a comprehensive report comparing recent sales prices for a specified property type in a given area, including average sales price, days on market, and other relevant metrics."
      },
      {
        title: "Estimate Rental Yield",
        content: "Use current market data and trends to estimate the potential rental yield for a specified apartment type, analyzing comparable rentals and providing a detailed financial analysis."
      }
    ]
  },
  {
    category: "Sales",
    prompts: [
      {
        title: "Perform Market Research",
        content: "Gather market data to inform a comprehensive sales strategy for a specified product type. Analyze competitors, customer behavior, and pricing strategies to compile a detailed report."
      },
      {
        title: "Help With Sales Enablement",
        content: "Create a detailed sales outline tailored to a specified target customer, highlighting key benefits and unique selling propositions of a product to guide sales interactions."
      },
      {
        title: "Write Sales Scripts",
        content: "Write a persuasive sales script for a specified product aimed at a target audience. The script should address potential objections, include interactive questions, and close with a strong call to action."
      },
      {
        title: "Simulate Sales Call",
        content: "Role-play a sales call where you act as a hesitant customer, expressing objections about a specified product. This simulation should help a salesperson practice overcoming common objections."
      },
      {
        title: "Suggest Sales Collaterals",
        content: "Identify and suggest a variety of sales collaterals (brochures, case studies, product demos, etc.) that support the sales process for a specified product, with guidance on effective usage."
      }
    ]
  },
  {
    category: "Starting a Business",
    prompts: [
      {
        title: "Do Market Research",
        content: "Conduct thorough market research for starting a specified business in a targeted region. Identify competitors, market trends, and demand for the business offering."
      },
      {
        title: "Analyze Competitors",
        content: "Perform a detailed competitor analysis for a specified business. Gather data on competitors' market share, product offerings, pricing, and marketing strategies, then compile a comprehensive report."
      },
      {
        title: "Analyze The Business Cost",
        content: "Conduct a comprehensive cost analysis for running a specified business, breaking down operational expenses (rent, labor, utilities, etc.) and comparing them with industry benchmarks."
      },
      {
        title: "Brainstorm Product Ideas",
        content: "Brainstorm innovative product ideas that align with a specified business vision and meet current market demands. Evaluate feasibility, market fit, and scalability for each idea."
      },
      {
        title: "Brainstorm Business Names",
        content: "Develop a list of potential business names for a specified business. Ensure the names are original, memorable, and align with the business's mission and values."
      },
      {
        title: "Brainstorm Taglines",
        content: "Generate a list of at least 10 compelling taglines for a specified business name. Each tagline should encapsulate the unique value proposition of the business and resonate with the target audience."
      },
      {
        title: "Create Customer Personas",
        content: "Develop detailed customer personas for a specified business. Analyze demographics, interests, and purchasing behaviors to provide clear profiles that inform marketing and sales strategies."
      },
      {
        title: "Create a Social Media Strategy",
        content: "Develop a comprehensive social media strategy for a specified business. Identify target platforms, content types, posting schedules, and KPIs to increase brand awareness and drive engagement."
      }
    ]
  },
  {
    category: "Time Management",
    prompts: [
      {
        title: "Organize Daily Tasks",
        content: "Create a detailed daily schedule that organizes a provided list of tasks based on urgency, importance, and deadlines. Allocate specific time slots and suggest breaks to maintain productivity."
      },
      {
        title: "Set Daily Goals",
        content: "Assist in setting achievable and realistic daily goals that are Specific, Measurable, Achievable, Relevant, and Time-bound (SMART). Provide actionable steps for each goal."
      },
      {
        title: "Prioritizing Work",
        content: "Analyze a provided list of tasks to determine which ones are most urgent and important. Provide a recommended order of execution along with a rationale for the prioritization."
      },
      {
        title: "Organize Email Inbox",
        content: "Provide practical tips and a step-by-step plan for managing and organizing an email inbox to increase productivity, reduce clutter, and streamline communication."
      },
      {
        title: "Track Project Milestones",
        content: "Create a system to track and document project milestones, noting key accomplishments, deadlines met, and any deviations from the project plan for regular review."
      },
      {
        title: "Coordinate Team Tasks",
        content: "Develop a comprehensive task list for a team working on a specific project, breaking down the project into manageable tasks with clear roles, responsibilities, and deadlines."
      },
      {
        title: "Improve Focus",
        content: "Suggest techniques and strategies to help improve focus and reduce distractions during work hours, ensuring maximum productivity and concentration."
      },
      {
        title: "Manage Work-Life Balance",
        content: "Create a balanced weekly schedule that accommodates both work commitments and personal time, ensuring sustained productivity without burnout."
      },
      {
        title: "Adjust Daily Schedule",
        content: "Provide guidance on rearranging a day's tasks due to unexpected events, ensuring all critical tasks are completed while accommodating new priorities."
      },
      {
        title: "Create a Time Block Schedule",
        content: "Design a structured time block schedule for a workday that allocates specific periods for tasks, breaks, and reviews, maximizing efficiency and focus."
      }
    ]
  },
  {
    category: "Travel Agents",
    prompts: [
      {
        title: "Write Destination Guide",
        content: "Create a brief guide on local customs and etiquette for tourists visiting a specified country. Include essential information on cultural norms and tips to avoid faux pas."
      },
      {
        title: "Research Customer Preferences",
        content: "Conduct research to determine the amenities most important to a specific group of travelers. Use surveys or data analysis to compile a list of top desired amenities."
      },
      {
        title: "Check Travel Warnings and Updates",
        content: "Research and compile information on travel advisories or warnings for a specified country during a given month. Include safety concerns, political unrest, or health risks."
      },
      {
        title: "Check for Cultural Events",
        content: "Compile a list of significant cultural events taking place in a specified country during a given month, highlighting celebrations that showcase local traditions."
      },
      {
        title: "Create Itinerary",
        content: "Develop a detailed 7-day itinerary for a specific type of trip in a given city. Include popular attractions, dining recommendations, transportation tips, and insider advice."
      },
      {
        title: "List Top-Rated Hotels",
        content: "Research and compile a list of top-rated hotels in a specified city. Include details such as hotel names, star ratings, locations, and notable amenities."
      },
      {
        title: "Respond to Complaints",
        content: "Draft a professional and empathetic response to a travel-related complaint from a client. Address their concerns and propose a solution while maintaining a positive tone."
      },
      {
        title: "Create Social Media Content",
        content: "Generate creative ideas for social media posts aimed at promoting travel packages. Ensure the ideas are engaging and showcase unique destinations and experiences."
      }
    ]
  },
  {
    category: "Upwork Proposal",
    prompts: [
      {
        title: "Write a Compelling Opening",
        content: "Craft an engaging opening for an Upwork proposal that captures potential clients' attention and highlights your understanding of the job description and your relevant skills."
      },
      {
        title: "Tailor Proposal for Job Description",
        content: "Create a tailored proposal that directly addresses the job posting requirements. Emphasize your relevant experience and clearly explain why you are the best fit for the project."
      },
      {
        title: "Adjust Tone To Match Client",
        content: "Review your current proposal and adjust the language, tone, and style to match the client's writing style and preferences, ensuring a strong connection from the start."
      },
      {
        title: "Highlight Key Qualifications",
        content: "Identify your most relevant skills and experiences based on the job description and craft a persuasive section that emphasizes your key qualifications."
      },
      {
        title: "Address Client-Specific Challenges",
        content: "Write a section of your proposal that addresses potential challenges mentioned in the client's project description, and outline your strategy for overcoming them."
      },
      {
        title: "Confirm Project Details",
        content: "Draft a concise message to confirm project timelines, milestones, and deliverables with a client who has accepted your proposal. Ensure all details are clear and agreed upon."
      }
    ]
  },
  {
    category: "VBA",
    prompts: [
      {
        title: "Create VBA Macro to Automate Reports in PowerPoint",
        content: "Write a VBA macro that automatically updates a PowerPoint presentation with data from an Excel spreadsheet. The macro should dynamically populate slides with the latest data whenever the Excel file is updated."
      },
      {
        title: "Automate Email Sending From Outlook",
        content: "Develop a VBA code to automate the process of sending personalized emails with attachments to contacts listed in an Excel sheet. Ensure the code is efficient and easy to use."
      },
      {
        title: "Optimize Existing VBA Code",
        content: "Review a provided VBA code snippet and identify areas for optimization. Suggest improvements for efficiency, readability, and maintainability."
      },
      {
        title: "Make VBA Code More Readable",
        content: "Refactor a given VBA code to improve organization and clarity. Break the code into modules, improve variable names, and add comments to explain the logic."
      },
      {
        title: "Develop Custom VBA Function",
        content: "Write a custom VBA function that performs a specified calculation in Excel. Ensure the function is well-documented, handles errors gracefully, and returns accurate results."
      },
      {
        title: "Write VBA Code to Automate Excel Task",
        content: "Develop a VBA script that automates a specified Excel task, such as data manipulation or report generation. Ensure the code is error-free and optimized for performance."
      }
    ]
  },
  {
    category: "Digital Products",
    prompts: [
      {
        title: "Come Up With Product Names",
        content: "Generate five catchy and creative name suggestions for a digital product. The names should be unique, memorable, and reflective of the product's features."
      },
      {
        title: "Analyze Market Trends",
        content: "Conduct a market analysis to determine the feasibility of a specified digital product. Evaluate customer demand, competition, and pricing strategies, and provide actionable insights."
      },
      {
        title: "Generate Product Ideas",
        content: "Brainstorm 10 innovative product ideas related to a specified topic. Each idea should include a brief description, target audience, and potential impact on the market."
      },
      {
        title: "Create Social Media Content",
        content: "Generate a comprehensive content calendar for promoting a digital product on various social media platforms. Include daily post ideas, visuals, and hashtags."
      },
      {
        title: "Draft Email Marketing Campaigns",
        content: "Write a persuasive email marketing campaign to promote an upcoming digital product. The campaign should highlight key features, benefits, and include a clear call-to-action."
      },
      {
        title: "Analyze Potential Audience",
        content: "Conduct thorough market research to identify and analyze the potential audience for a digital product. Provide detailed demographic and behavioral insights to inform marketing strategies."
      }
    ]
  },
  {
    category: "Affiliate Marketing",
    prompts: [
      {
        title: "Find Profitable Niche",
        content: "Conduct comprehensive market analysis to identify a profitable niche for affiliate marketing. The niche should have high demand, low competition, and strong conversion potential."
      },
      {
        title: "Find Affiliate Programs",
        content: "Identify and compile a list of reputable affiliate programs within a specified niche. Include details such as commission rates, cookie duration, and product overviews."
      },
      {
        title: "Create Product Review Template",
        content: "Develop a versatile product review template for affiliate marketing. The template should include sections for key features, benefits, drawbacks, comparisons, and a final recommendation."
      },
      {
        title: "Contact Potential Partners",
        content: "Draft a professional outreach script to invite potential partners to join an affiliate program. Emphasize mutual benefits and include a clear call-to-action for further discussion."
      },
      {
        title: "Recommend Products Within Niche",
        content: "Identify and recommend top-performing products within a specified niche for affiliate marketing. Include detailed insights into product demand, customer reviews, and promotional strategies."
      },
      {
        title: "Generate Content Ideas",
        content: "Brainstorm creative content ideas that highlight a specified product's features and benefits. Consider various formats such as blog posts, videos, and social media updates."
      },
      {
        title: "Create Lead Magnet",
        content: "Develop an irresistible lead magnet for a specified product. The lead magnet should provide valuable information or an exclusive offer that encourages potential customers to share their contact details."
      }
    ]
  },
  {
    category: "Email Marketing",
    prompts: [
      {
        title: "Brainstorm Subject Lines",
        content: "Generate a list of compelling subject lines for an email about a given topic. The subject lines should be attention-grabbing, encourage opens, and include relevant keywords."
      },
      {
        title: "Write Email Version for A/B Testing",
        content: "Craft an alternative version of an existing email for A/B testing. Experiment with different tones, calls-to-action, and structures while keeping the core message intact."
      },
      {
        title: "Write Post Purchase Email",
        content: "Compose a post-purchase email to thank a customer for their purchase, provide usage tips, and encourage further engagement or feedback."
      },
      {
        title: "Write a Newsletter",
        content: "Write an engaging email newsletter for a specified topic and target audience. The newsletter should inform, entertain, and include clear calls-to-action."
      },
      {
        title: "Write Promotional Email",
        content: "Draft a persuasive promotional email for a specified product or service. Highlight key benefits and include an urgent call-to-action to drive conversions."
      }
    ]
  },
  {
    category: "Facebook Ads",
    prompts: [
      {
        title: "Suggest Ad Concept Ideas",
        content: "Brainstorm 5 innovative and attention-grabbing concepts for promoting a specified product via Facebook ads. Consider various ad formats and unique selling points."
      },
      {
        title: "Suggest UGC Ideas",
        content: "Generate 5 ideas for user-generated content that can be used in Facebook ads for a specified product. The ideas should help build trust and credibility with potential customers."
      },
      {
        title: "Draft Initial Ad Copy",
        content: "Write compelling ad copy for a specified product aimed at a target audience. The copy should include key features, benefits, and a clear call-to-action."
      },
      {
        title: "Generate Headline Variations",
        content: "Create 5 headline variations for a Facebook ad promoting a specified product. The headlines should be concise, engaging, and optimized for conversions."
      },
      {
        title: "Suggest Call-To-Actions",
        content: "Provide 5 strong call-to-action phrases for a Facebook ad that compel the target audience to take immediate action, such as clicking or purchasing."
      },
      {
        title: "Analyze Ad Performance",
        content: "Analyze the performance metrics of a Facebook ad campaign (click-through rates, conversions, etc.) and provide actionable recommendations to improve its effectiveness."
      },
      {
        title: "Define Target Audience",
        content: "Identify and define the target audience for a specified product by analyzing demographics, interests, and behaviors to improve ad targeting and engagement."
      }
    ]
  },
  {
    category: "Instagram Reels",
    prompts: [
      {
        title: "Brainstorm Video Topics",
        content: "Generate a list of 5 innovative and engaging topics for Instagram Reels videos centered around a specified topic. Ensure each topic is visually appealing and resonates with the target audience."
      },
      {
        title: "Improve Audience Engagement",
        content: "Brainstorm and suggest interactive questions to ask viewers in an Instagram Reel about a specified topic. The questions should spark comments and enhance community interaction."
      },
      {
        title: "Create Themed Series",
        content: "Develop a 5-part series concept for Instagram Reels on a specified topic. Outline the storyline for each part and ensure a logical progression that keeps viewers engaged."
      },
      {
        title: "Write Scripts",
        content: "Craft a concise and engaging script for an Instagram Reel video about a given topic. Ensure the script captures attention immediately and includes a call-to-action."
      },
      {
        title: "Add Humor",
        content: "Incorporate a funny pun or humorous element into an Instagram Reel video about a specified topic, ensuring it fits naturally with the content."
      },
      {
        title: "Write Caption",
        content: "Write a compelling Instagram Reel caption for a specified topic that includes relevant hashtags and a call-to-action to boost engagement."
      }
    ]
  },
  {
    category: "YouTube Shorts",
    prompts: [
      {
        title: "Brainstorm Video Topics",
        content: "Generate a list of engaging topics for YouTube Shorts videos centered around a specified topic. Ensure the ideas are unique, visually appealing, and optimized for short-form content."
      },
      {
        title: "Analyze Trends",
        content: "Research and suggest trending topics in a specified niche that are currently popular on YouTube Shorts. Provide insights on keywords and content styles that resonate with viewers."
      },
      {
        title: "Improve Audience Engagement",
        content: "Brainstorm interactive questions and prompts for YouTube Shorts videos about a specified topic to encourage viewer interaction and community discussion."
      },
      {
        title: "Create Themed Series",
        content: "Develop a 5-part YouTube Shorts series on a given topic. Outline a cohesive storyline for each short, ensuring each part naturally leads into the next."
      },
      {
        title: "Write Scripts",
        content: "Write a concise script for a YouTube Short video about a specified topic. The script should grab attention quickly, deliver key points, and include a call-to-action."
      },
      {
        title: "Add Jokes",
        content: "Incorporate a funny joke or pun into a YouTube Short video about a specified topic to enhance its entertainment value."
      },
      {
        title: "Write Description",
        content: "Write an optimized description for a YouTube Short video on a specified topic. Include relevant keywords, a brief overview, and a call-to-action."
      },
      {
        title: "Suggest SEO Title",
        content: "Generate SEO-friendly title variations for a YouTube Short video about a specified topic. The titles should be catchy, concise, and optimized for search visibility."
      }
    ]
  },
  {
    category: "Academic Writing",
    prompts: [
      {
        title: "Brainstorm Essay Topics",
        content: "Generate a diverse range of potential essay topics on a given subject that are original, thought-provoking, and cater to various perspectives."
      },
      {
        title: "Find Credible Sources",
        content: "Find and compile a list of credible sources on a specified topic, including books, scholarly articles, and reputable news outlets. Include citation details for each source."
      },
      {
        title: "Explain Complex Topics",
        content: "Explain a complex topic in simple, accessible language that a student can understand. Use analogies, examples, and visual descriptions to clarify the concept."
      },
      {
        title: "Draft Introduction",
        content: "Write a compelling introduction for an essay on a specified topic. The introduction should include a hook, background information, and a clear thesis statement."
      },
      {
        title: "Improve Vocabulary",
        content: "Enhance the vocabulary of a given text by replacing common words with more sophisticated synonyms while preserving the original meaning."
      },
      {
        title: "Check Reference Formatting",
        content: "Review a provided text to ensure that all references and citations are formatted correctly according to a specified style (APA, MLA, etc.)."
      },
      {
        title: "Edit & Proofread",
        content: "Proofread an essay for grammatical, spelling, punctuation, and syntactical errors. Provide feedback on structure and clarity, and suggest improvements."
      },
      {
        title: "Create Outline",
        content: "Generate an in-depth and well-structured outline for an essay on a specified topic, including sections for introduction, body, and conclusion with key points."
      },
      {
        title: "Develop Thesis Statement",
        content: "Formulate a clear and concise thesis statement for an essay on a specified subject, ensuring it is debatable and guides the direction of the essay."
      },
      {
        title: "Write Concluding Statements",
        content: "Craft a strong conclusion for an essay on a specified topic that summarizes key points, reaffirms the thesis, and leaves a lasting impression."
      }
    ]
  },
  {
    category: "Fiction Writing",
    prompts: [
      {
        title: "Brainstorm Plot Ideas",
        content: "Generate five unique and original plot ideas for a fiction novel based on a specified theme. Each idea should have a clear beginning, middle, and end with interesting twists."
      },
      {
        title: "Create Engaging Storyline",
        content: "Develop an engaging storyline for a fiction novel based on a given theme. Ensure the plot is coherent, has dynamic characters, and includes conflict, climax, and resolution."
      },
      {
        title: "Build Memorable Characters",
        content: "Create detailed character profiles for key characters in a fiction novel. Include background, personality traits, motivations, and character arcs that drive the story forward."
      },
      {
        title: "Develop Scenes",
        content: "Write a vivid scene description for a specified setting in a fiction novel. Include details about the environment, characters, dialogue, and actions to immerse the reader."
      },
      {
        title: "Overcome Writer's Block",
        content: "Review the current chapters of a fiction novel and provide creative suggestions and an outline for the next few chapters to continue the narrative while maintaining tone and style."
      },
      {
        title: "Write Dialogues",
        content: "Craft a realistic and engaging dialogue between specified characters that reveals their personalities, drives the plot, and deepens their relationships."
      }
    ]
  },
  {
    category: "Technical Writing",
    prompts: [
      {
        title: "Generate Key Points",
        content: "Research and generate a comprehensive list of key points on a specified technical topic. Organize the points logically in clear, layman-friendly language."
      },
      {
        title: "Draft FAQ Section",
        content: "Create a detailed FAQ section for a specified technical topic. Answer common questions in clear, concise language and organize them by category for easy navigation."
      },
      {
        title: "Research & Fact-Check",
        content: "Review, validate, and confirm the technical details of a given topic. Cross-check with credible sources and ensure consistency in terminology and formatting."
      },
      {
        title: "Improve Document Structure",
        content: "Develop a logical content flow for a technical document on a specified topic, ensuring smooth transitions from foundational concepts to more advanced details."
      },
      {
        title: "Get Feedback",
        content: "Proofread and provide detailed feedback on a technical document to improve clarity, coherence, and overall readability while maintaining accuracy and depth."
      },
      {
        title: "Optimize Content",
        content: "Refine and improve a given technical text for clarity, removing jargon and simplifying complex ideas while ensuring it remains informative and accurate."
      }
    ]
  },
  {
    category: "Proofreading",
    prompts: [
      {
        title: "Improve Sentence Structure",
        content: "Review and enhance the sentence structure of a provided text. Focus on clarity, coherence, and readability while maintaining the original meaning."
      },
      {
        title: "Correct Grammatical Errors",
        content: "Carefully examine a given text to identify and correct grammatical, punctuation, and syntactical errors, ensuring the text is error-free and clear."
      },
      {
        title: "Ensure Style Consistency",
        content: "Edit a provided text to ensure consistent style and tone throughout. Maintain the original voice while improving overall coherence and readability."
      },
      {
        title: "Tailor Language for a Specific Audience",
        content: "Modify a provided text to better suit a specified target audience. Adjust tone, vocabulary, and style to ensure the content is engaging and accessible."
      },
      {
        title: "Improve Clarity and Conciseness",
        content: "Revise a provided text to remove redundant phrases and simplify complex sentences, enhancing clarity and making the content more concise."
      },
      {
        title: "Enrich Vocabulary",
        content: "Enhance the vocabulary of a provided text by replacing basic words with more sophisticated synonyms while maintaining the original meaning and tone."
      },
      {
        title: "Check Plagiarism",
        content: "Review a given text for any signs of plagiarism, using reliable methods to ensure originality. Provide feedback on any sections that may require rewriting or proper citation."
      },
      {
        title: "Check Verb Tense Consistency",
        content: "Analyze a provided text to ensure consistent verb tense usage throughout. Identify and correct any shifts that disrupt the flow or clarity of the text."
      }
    ]
  },
  {
    category: "Research Paper",
    prompts: [
      {
        title: "Summarize a Complex Paper",
        content: "Read a specified research paper and produce a concise summary that captures its main findings, methodology, results, and implications for a general audience."
      },
      {
        title: "Formulate a Research Question",
        content: "Develop a clear, specific, and researchable question on a given topic that addresses a gap in the existing literature and guides a potential study."
      },
      {
        title: "Find Research Methodologies",
        content: "Suggest appropriate qualitative and quantitative research methods for studying a specified topic. Justify the relevance and potential advantages of each method."
      },
      {
        title: "Draft a Research Paper Outline",
        content: "Create a detailed outline for a research paper on a specified topic. Include sections for introduction, literature review, methodology, results, discussion, and conclusion, with key points and citations."
      },
      {
        title: "Improve Readability",
        content: "Review and refine a provided section of a research paper to enhance clarity and flow, ensuring that complex ideas are presented in an accessible manner."
      },
      {
        title: "Interpret Reviewer’s Feedback",
        content: "Analyze the provided reviewer feedback on a research paper and create a detailed response plan outlining how each point will be addressed or incorporated in the revision."
      },
      {
        title: "Write an Abstract",
        content: "Draft a concise and clear abstract for a research paper that summarizes the objectives, methodologies, key findings, and implications of the study in under 250 words."
      },
      {
        title: "Understand Ethical Considerations",
        content: "Provide a detailed analysis of the ethical considerations related to a specified research paper, identifying potential ethical concerns and suggesting ways to address them."
      },
      {
        title: "Search for Prior Work",
        content: "Conduct an extensive literature search for research papers on a specified topic. Compile a list of seminal and recent works with brief summaries and citation details."
      },
      {
        title: "Find Data Sources",
        content: "Identify and compile a list of credible data sources for researching a specified topic. Include primary and secondary sources along with any access restrictions."
      },
      {
        title: "Promote Your Paper",
        content: "Recommend suitable platforms and strategies for promoting a research paper to academics, scholars, and professionals in the field. Include both traditional and digital avenues."
      }
    ]
  },
  {
    category: "Rewriting Content",
    prompts: [
      {
        title: "Simplify Complex Information",
        content: "Rewrite a provided piece of complex text in simpler, more accessible language without changing its original meaning. Ensure it is easy to understand for a general audience."
      },
      {
        title: "Improve Clarity and Conciseness",
        content: "Revise the provided text to enhance clarity and conciseness. Remove redundant phrases and simplify complex sentences while preserving the core message."
      },
      {
        title: "Formalize Informal Text",
        content: "Transform a provided informal text into a formal composition. Replace slang and colloquial language with professional vocabulary while retaining the original intent."
      },
      {
        title: "Make Professional Text Sound Casual",
        content: "Rewrite a provided professional text in a casual, conversational tone, ensuring it remains engaging and clear while sounding more friendly."
      },
      {
        title: "Tailor Content for Specific Audience",
        content: "Modify the provided text to suit a specified target audience. Adjust tone, style, and vocabulary to ensure the content is relatable and engaging for that audience."
      },
      {
        title: "Optimize Text for SEO",
        content: "Rewrite the provided text to target a specific keyword with a natural integration. Ensure the keyword is included in the title and subheadings and that the overall text remains engaging and informative."
      },
      {
        title: "Paraphrase Academic Content",
        content: "Paraphrase the provided academic text to express the same ideas in completely new wording. Ensure the paraphrased text is unique, maintains the original meaning, and is free of plagiarism."
      }
    ]
  },
  {
    category: "Script Writing",
    prompts: [
      {
        title: "Analyze Format & Structure",
        content: "Review an existing script to analyze its format and structure. Provide suggestions for reordering, editing, or rewriting scenes to improve pacing and narrative flow."
      },
      {
        title: "Write Monologues",
        content: "Craft a compelling monologue for a specified character experiencing a given situation or emotion. The monologue should offer deep insight into the character's thoughts and feelings."
      },
      {
        title: "Write Dialogues",
        content: "Generate engaging and realistic dialogue between specified characters that advances the plot and reveals key aspects of their personalities."
      },
      {
        title: "Provide Feedback and Revisions",
        content: "Review a provided script and offer detailed, constructive feedback on structure, dialogue, character development, and pacing, with actionable recommendations for improvement."
      },
      {
        title: "Build Characters",
        content: "Brainstorm and develop detailed character profiles for a script based on a given script title. Include names, backstories, motivations, and character arcs that drive the narrative."
      },
      {
        title: "Generate Script Ideas",
        content: "Brainstorm innovative and engaging ideas for a new script. Provide a brief synopsis, potential plot twists, and character arcs that make the story unique and marketable."
      },
      {
        title: "Develop Plotlines",
        content: "Develop detailed plotlines for a script based on a given theme and genre. Include a clear narrative arc with conflict, resolution, and character growth."
      },
      {
        title: "Generate a Pitch",
        content: "Distill the essence of a provided script into a compelling logline or pitch that summarizes the main conflict, unique selling points, and emotional core in one or two sentences."
      },
      {
        title: "Assist in Research for Inclusivity",
        content: "Review a provided script for any content that might perpetuate stereotypes or be offensive, and suggest revisions to ensure inclusivity and sensitivity."
      }
    ]
  },
  {
    category: "Speech Writing",
    prompts: [
      {
        title: "Brainstorm Ideas",
        content: "Generate a comprehensive list of potential themes for a speech about a given topic. Ensure the themes are engaging, insightful, and relevant to the target audience."
      },
      {
        title: "Research the Topic",
        content: "Summarize key information, statistics, and complex concepts related to a given speech topic. Provide the speaker with a solid foundation of facts and figures to support their speech."
      },
      {
        title: "Create the Speech Outline",
        content: "Develop a comprehensive outline for a speech on a specified topic. Include an introduction, several main points with supporting evidence, and a compelling conclusion with a call-to-action."
      },
      {
        title: "Write the First Draft",
        content: "Draft a complete speech based on a provided outline. Ensure the speech is engaging from start to finish, incorporates storytelling and pauses for effect, and is tailored to the target audience."
      },
      {
        title: "Edit and Revise",
        content: "Review and revise a provided speech for clarity, flow, and persuasiveness. Offer constructive feedback on improving tone, structure, and the overall impact of the speech."
      },
      {
        title: "Practice Delivery",
        content: "Provide suggestions for enhancing speech delivery, including highlighting key points, using rhetorical devices, and employing strategic pauses to emphasize important messages."
      }
    ]
  },
  {
    category: "Story Writing",
    prompts: [
      {
        title: "Proofread & Edit",
        content: "Review a provided story for grammar, punctuation, and overall narrative flow. Offer constructive feedback on character development, pacing, and dialogue to enhance reader engagement."
      },
      {
        title: "Generate Story Ideas",
        content: "Brainstorm a list of innovative and engaging story ideas based on a specified topic. Each idea should include a brief premise, potential plot twists, and character sketches."
      },
      {
        title: "Build a Story Plot",
        content: "Develop a detailed and captivating story plot for a specified topic. Ensure the plot has a clear beginning, middle, and end with dynamic characters and unexpected twists."
      },
      {
        title: "Create Characters",
        content: "Design comprehensive character profiles for a story based on a provided plot. Include details such as background, personality traits, motivations, and character arcs."
      },
      {
        title: "Write Dialogues",
        content: "Craft engaging dialogue between specified characters that reflects their personalities, advances the plot, and adds depth to their relationships."
      },
      {
        title: "Establish a Scene",
        content: "Develop a vivid scene description for a story based on a given setting. Use sensory details and descriptive language to immerse the reader in the environment."
      },
      {
        title: "Write the Full Story",
        content: "Compose a complete story of a specified word count based on a given plot and set of characters. Ensure the narrative is engaging, well-paced, and leaves a lasting impression."
      }
    ]
  },
  {
    category: "Grant Writing",
    prompts: [
      {
        title: "Find Relevant Grants",
        content: "Conduct an extensive search for grant opportunities related to a specified field. Compile a detailed report including eligibility criteria, application deadlines, and award amounts."
      },
      {
        title: "Find Potential Partners",
        content: "Identify organizations or agencies that provide grants or financial support in a specified field. Compile a list with names, contact information, and types of funding offered."
      },
      {
        title: "Write Specific Sections of Proposal",
        content: "Draft a specific section (introduction, methodology, conclusion) of a grant proposal focusing on a given goal. Ensure the writing is persuasive, clear, and aligned with the funding organization's mission."
      },
      {
        title: "Develop Project Budget",
        content: "Create a comprehensive budget breakdown for a grant proposal, including costs for personnel, equipment, supplies, travel, and indirect expenses. Justify each cost item."
      },
      {
        title: "Ensure Grant Guidelines",
        content: "Review a grant proposal to ensure it meets all specified guidelines, including formatting, word count, and content requirements. Provide feedback for any necessary improvements."
      },
      {
        title: "Outline Grant Proposal",
        content: "Develop an outline for a grant proposal that clearly conveys objectives, methods, budget, and expected outcomes. Ensure the outline is persuasive and well-structured."
      },
      {
        title: "Draft Emails to Potential Collaborators",
        content: "Write an engaging email to invite potential collaborators to join a grant proposal. Highlight mutual benefits, the project goal, and include a clear call-to-action for further discussion."
      }
    ]
  },
  {
    category: "Journalism",
    prompts: [
      {
        title: "Research Current Events and Trends",
        content: "Conduct thorough research on current events and trends in a specified field. Compile information from credible sources to provide a comprehensive understanding of the topic for a news article."
      },
      {
        title: "Gather Background Information",
        content: "Gather comprehensive background information on a specified topic by researching credible sources, conducting interviews, and compiling relevant data to support an in-depth article."
      },
      {
        title: "Interpret Complex Data",
        content: "Analyze a set of complex data related to a specified topic and present it in an accessible and engaging way. Include visualizations and explanations of key trends and insights."
      },
      {
        title: "Suggest Catchy Article Headlines",
        content: "Generate a list of catchy and SEO-friendly headlines for an article on a specified topic. Ensure the headlines are engaging, thought-provoking, and accurately reflect the content."
      },
      {
        title: "Come Up With Interview Questions",
        content: "Develop a list of insightful and engaging interview questions for a specified interviewee related to a given topic. Ensure the questions are well-researched and relevant to their expertise."
      },
      {
        title: "Verify Source",
        content: "Review a given source to verify its credibility and accuracy. Cross-reference the information with other reputable sources and provide a report on its reliability."
      },
      {
        title: "Structure Article",
        content: "Create a well-organized structure for an article on a specified topic. Include an attention-grabbing introduction, logically ordered sections with subheadings, and a compelling conclusion."
      }
    ]
  },
  {
    category: "Nonfiction Writing",
    prompts: [
      {
        title: "Brainstorm Book Topics",
        content: "Generate a range of compelling nonfiction book ideas centered around a specified topic. Include potential titles, brief synopses, and explanations of what makes each idea unique."
      },
      {
        title: "Come Up With Title Ideas",
        content: "Suggest a list of creative and memorable titles for a nonfiction book based on a specified topic. Ensure the titles capture the essence of the content and resonate with the target audience."
      },
      {
        title: "Generate Outline",
        content: "Create a detailed outline for a nonfiction book on a specified topic. Include an introduction, chapter breakdowns with key points, and a conclusion that ties the themes together."
      },
      {
        title: "Write Individual Chapters",
        content: "Write a complete chapter for a nonfiction book based on a provided outline. Ensure the chapter is informative, engaging, and consistent with the overall narrative of the book."
      },
      {
        title: "Develop Argument",
        content: "Develop a comprehensive argument on a specified topic for a nonfiction book. Include a clear thesis, supporting evidence from credible sources, and a logical progression of ideas."
      }
    ]
  },
  {
    category: "Copywriting",
    prompts: [
      {
        title: "Check Copy for Unnecessary Words",
        content: "Review a provided piece of sales copy to identify and remove redundant or filler words, ensuring every word contributes to the message and persuasion."
      },
      {
        title: "Improve Readability of Copy",
        content: "Edit a piece of sales copy to improve its clarity and engagement. Focus on simplifying language, enhancing sentence structure, and ensuring the copy is compelling."
      },
      {
        title: "Write Copy Using AIDA Framework",
        content: "Craft persuasive sales copy for a specified product or service using the AIDA (Attention, Interest, Desire, Action) framework. Ensure the copy leads the reader to take a specific action."
      },
      {
        title: "Generate Variants for A/B Testing",
        content: "Produce three distinct variants of a piece of sales copy for A/B testing. Each variant should appeal to different audience segments or emphasize different benefits of the product."
      }
    ]
  },
  {
    category: "Cover Letter",
    prompts: [
      {
        title: "Gather Details About Company You’re Applying For",
        content: "Research a specified company to gather details about its history, mission, values, recent projects, and organizational culture. Compile this information into a coherent summary."
      },
      {
        title: "Write Cover Letter Introduction",
        content: "Draft an introductory paragraph for a cover letter for a specified job title at a given company. Include a brief self-introduction and state the purpose of the letter in a professional, engaging tone."
      },
      {
        title: "Summarize Relevant Skills and Experience",
        content: "Identify and summarize your key skills and experiences that match the requirements for a specified job title. Highlight how these qualifications make you an ideal candidate."
      },
      {
        title: "Highlight Previous Achievements",
        content: "Describe a significant achievement in a relevant field that demonstrates your potential for success in the specified job title. Include metrics or examples to quantify the impact."
      },
      {
        title: "Demonstrate Passion for the Industry",
        content: "Write a section for a cover letter that explains your passion for a specified industry and how that passion drives your work and contributes to your professional success in the desired role."
      },
      {
        title: "Conclude a Letter",
        content: "Draft a concluding paragraph for a cover letter that summarizes your qualifications, expresses eagerness for an interview, and includes a polite call-to-action for further contact."
      },
      {
        title: "Explain How Your Skills Match the Job Requirements",
        content: "Provide a detailed explanation in your cover letter that maps your specific skills to the requirements of a given job title. Use examples to demonstrate how your abilities meet the employer's needs."
      },
      {
        title: "Write Whole Cover Letter at Once",
        content: "Compose a complete cover letter for the position of a specified job title at a given company. The letter should include an introduction, body paragraphs detailing your skills and experiences, and a compelling conclusion."
      }
    ]
  },
  {
    category: "Creative Writing",
    prompts: [
      {
        title: "Explore Themes",
        content: "Brainstorm a range of unique and captivating themes suitable for a specified novel type. Provide a brief description for each theme, explaining its potential plot direction, character development, and conflict resolution."
      },
      {
        title: "Suggest Titles",
        content: "Generate five imaginative and thought-provoking titles for a book revolving around a given topic. Ensure the titles capture the essence of the story and appeal to the target audience."
      },
      {
        title: "Develop Characters",
        content: "Create detailed character profiles for a key character in a new book centered on a specified topic. Include background, personality traits, motivations, and a potential character arc."
      },
      {
        title: "Create a Setting",
        content: "Describe a vivid and engaging setting for a book about a specified topic. Use sensory details and imaginative language to create an immersive environment that complements the narrative."
      },
      {
        title: "Write Monologues",
        content: "Write a compelling monologue for a character in a specified setting. The monologue should reveal the character's inner thoughts and emotions, contributing to character development and plot progression."
      },
      {
        title: "Write Dialogues",
        content: "Craft a realistic and engaging dialogue between specified characters in a given setting. The dialogue should reveal character dynamics, advance the plot, and reflect the tone of the story."
      },
      {
        title: "Overcome Writer's Block",
        content: "Review the current chapters of your novel and provide creative suggestions and an outline for the next few chapters to overcome writer's block while maintaining tone and style."
      },
      {
        title: "Get Feedback on Writing",
        content: "Proofread a provided section of your novel and offer comprehensive feedback on grammar, structure, character consistency, and overall narrative flow to enhance readability."
      }
    ]
  },
  {
    category: "Video Scripts",
    prompts: [
      {
        title: "Brainstorm Video Topics",
        content: "Generate a list of engaging video topics for a specified subject. Ensure the topics are relevant, creative, and likely to capture the audience's attention."
      },
      {
        title: "Generate Title",
        content: "Create 5 catchy and SEO-friendly titles for a video about a specified topic. The titles should be concise, intriguing, and designed to maximize viewer engagement."
      },
      {
        title: "Build Narrative Flow",
        content: "Structure a clear and engaging narrative flow for a video about a specified topic. Outline the beginning, middle, and end, and include key points that ensure a cohesive story."
      },
      {
        title: "Create Character Profiles",
        content: "Develop detailed profiles for the characters in a video script based on a provided description. Include backstories, personality traits, and motivations to support dialogue creation."
      },
      {
        title: "Create Backstory",
        content: "Develop a compelling backstory for a specific character to be featured in a video script. The backstory should explain the character’s motivations, challenges, and evolution throughout the narrative."
      },
      {
        title: "Craft Dialogues",
        content: "Write engaging dialogue for a video script that features specified characters. Ensure the dialogue is natural, advances the plot, and highlights key character traits."
      },
      {
        title: "Draft Scenes",
        content: "Write a detailed scene description for a video about a specified topic. Include setting details, character actions, dialogue, and camera direction suggestions to enhance storytelling."
      },
      {
        title: "Provide Script Feedback",
        content: "Review a provided video script and offer constructive feedback on structure, dialogue, pacing, and overall narrative. Provide actionable suggestions for improvements."
      },
      {
        title: "Outline Scene Breakdown",
        content: "Create an outline that breaks down a video into its key scenes and transitions, ensuring a logical progression and smooth narrative flow."
      }
    ]
  },
  {
    category: "Website Copy",
    prompts: [
      {
        title: "Write Meta Description",
        content: "Write an SEO-optimized meta description for a specified blog post or webpage. The description should be compelling, informative, and include relevant keywords, within 160 characters."
      },
      {
        title: "Explore Content Angles",
        content: "Brainstorm and propose multiple content angles for a website about a specified niche. Provide sample headlines and brief descriptions to illustrate potential article ideas."
      },
      {
        title: "Generate Headline Ideas",
        content: "Create 5 catchy and engaging headlines for a specified type of webpage. Ensure the headlines are SEO-friendly and align with the brand's voice."
      },
      {
        title: "Write Product Descriptions",
        content: "Compose a compelling product description for a specified product that highlights key features, benefits, and unique selling points, and includes a persuasive call-to-action."
      },
      {
        title: "Edit and Refine Content",
        content: "Critically review and suggest improvements for a given piece of website content. Focus on clarity, engagement, and ensuring the content aligns with the brand’s messaging and SEO best practices."
      },
      {
        title: "Analyze Audience",
        content: "Describe the typical customer for a specified product by detailing demographics, interests, behaviors, and preferences. Use this information to tailor marketing messages."
      },
      {
        title: "Draft Website Page Copy",
        content: "Write a draft for a specified webpage (e.g., home page, about page, contact page) for a company. The copy should be engaging, SEO-friendly, and include clear calls-to-action."
      }
    ]
  },
  {
    category: "Book Writing",
    prompts: [
      {
        title: "Generate a Book Outline",
        content: "Generate a detailed book outline based on a given premise. The outline should include [n] chapters, key plot points, character arcs, and thematic development, ensuring a coherent structure."
      },
      {
        title: "Write Book Chapters",
        content: "Write a complete chapter for a book based on a provided outline. Ensure the chapter is engaging, well-researched, and consistent with the overall narrative."
      },
      {
        title: "Develop a Plotline",
        content: "Develop an intriguing plotline for a book that includes dynamic characters, compelling conflicts, and a well-balanced narrative arc that captivates readers."
      },
      {
        title: "Create Characters",
        content: "Design comprehensive character profiles for a book based on a provided character description. Include background, personality traits, motivations, and development arcs."
      },
      {
        title: "Establish a Scene",
        content: "Develop a detailed description of a setting for a book that immerses the reader in the environment. Use vivid imagery and sensory details to bring the scene to life."
      },
      {
        title: "Help With Book Research",
        content: "Conduct comprehensive research on a specified topic to provide accurate and relevant information for a book project. Compile findings with proper citations for reference."
      },
      {
        title: "Get Feedback on Writing",
        content: "Proofread a section of a book and provide detailed, constructive feedback on grammar, structure, character development, and narrative flow to improve overall quality."
      }
    ]
  },
  {
    category: "Marketing, Promotion & Outreach",
    prompts: [
      {
        title: "Develop a Value Proposition",
        content: "Craft a compelling value proposition for a specified product/service that clearly communicates its unique benefits and why it is superior to competitors, targeting a specific audience."
      },
      {
        title: "Allocate Marketing Budget",
        content: "Create comprehensive budget templates and resource allocation guides for a specified marketing channel strategy. Provide recommendations for optimizing ROI and reallocating funds based on performance."
      },
      {
        title: "Suggest KPIs to Monitor",
        content: "Identify and suggest key performance indicators (KPIs) to track the success of a specified marketing channel strategy. Explain how each KPI can be measured and used to optimize future campaigns."
      },
      {
        title: "Develop Channel Strategy",
        content: "Develop a comprehensive channel strategy to promote a specified product. Include an analysis of target platforms, content types, distribution methods, and tactics for maximizing reach."
      }
    ]
  },
  {
    category: "Copywriting – Email",
    prompts: [
      {
        title: "Brainstorm Subject Lines",
        content: "Generate a variety of compelling email subject lines for an email about a specified topic. The subject lines should be designed to increase open rates and capture attention."
      },
      {
        title: "Write Prospecting Email",
        content: "Write an introductory prospecting email to a potential client, presenting a specified product/service and emphasizing its benefits. Include a clear call-to-action."
      },
      {
        title: "Write Follow-Up Email",
        content: "Craft a persuasive follow-up email referencing a previous conversation or proposal. Encourage the recipient to take the next step while addressing any potential objections."
      },
      {
        title: "Write Referral Email",
        content: "Compose a personalized referral email thanking a customer for their purchase and encouraging them to refer friends or colleagues. Include incentives for referrals and a clear call-to-action."
      },
      {
        title: "Write Upsell Email",
        content: "Write an upsell email to a customer who recently purchased a product, introducing a complementary or upgraded product. Highlight additional benefits and include a clear call-to-action."
      }
    ]
  },
  {
    category: "LinkedIn",
    prompts: [
      {
        title: "Brainstorm LinkedIn Post Ideas",
        content: "Generate a series of compelling LinkedIn post ideas on a specified topic to engage professionals. The ideas should include tips, industry insights, and interactive questions."
      },
      {
        title: "Research and Gather Information",
        content: "Gather supporting data, statistics, and expert insights for a LinkedIn post about a specified topic. Ensure the content is engaging and aligns with current trends in the industry."
      },
      {
        title: "Draft LinkedIn Post",
        content: "Write an engaging LinkedIn post about a specified topic, using professional language and incorporating a clear call-to-action. Ensure the post encourages comments and shares."
      },
      {
        title: "Suggest Images To Add",
        content: "Recommend complementary images for a LinkedIn post on a specified topic. The images should be professional, visually appealing, and enhance the overall message of the post."
      },
      {
        title: "Edit & Refine",
        content: "Review and refine a LinkedIn post to improve clarity, engagement, and alignment with the brand's voice. Provide suggestions for enhancing the post’s overall impact."
      },
      {
        title: "Analyze Trending Topics",
        content: "Research current trending topics in a specified industry on LinkedIn and provide recommendations on how to incorporate these trends into your content strategy."
      },
      {
        title: "Write a Catchy Headline",
        content: "Craft an attention-grabbing headline for your LinkedIn profile that succinctly summarizes your expertise and unique value proposition."
      },
      {
        title: "Draft a Profile Summary",
        content: "Write a compelling LinkedIn profile summary that highlights your professional background, skills, and achievements, tailored to appeal to your target industry."
      },
      {
        title: "Suggest Relevant Skills",
        content: "Identify and suggest a list of relevant skills for your LinkedIn profile based on your profession and expertise to increase your profile’s visibility."
      },
      {
        title: "Identify Important Keywords",
        content: "Conduct keyword research for your LinkedIn profile. Provide a list of high-impact keywords that reflect your profession and help optimize your profile for search."
      },
      {
        title: "Request a Recommendation",
        content: "Draft a personalized LinkedIn recommendation request to a specified contact, highlighting past collaborations and asking for a detailed endorsement."
      },
      {
        title: "Write a Recommendation",
        content: "Write a compelling LinkedIn recommendation for a specified individual, focusing on their strengths, achievements, and the impact of their work."
      },
      {
        title: "Generate Post Ideas",
        content: "Generate a list of engaging LinkedIn post ideas for a specified topic that encourage interaction, discussions, and increased profile visibility."
      },
      {
        title: "Draft a Networking Message",
        content: "Write a cold networking message for LinkedIn that establishes common ground and invites further conversation in a professional manner."
      }
    ]
  },
  {
    category: "OnlyFans",
    prompts: [
      {
        title: "Create a Content Calendar",
        content: "Design a detailed content calendar for OnlyFans with daily themes for the next month. Include content ideas and scheduling suggestions to maximize subscriber engagement."
      },
      {
        title: "Brainstorm Themes",
        content: "Brainstorm creative and engaging themes for OnlyFans content centered around a specific topic. Ensure the themes appeal to the target audience and encourage subscription."
      },
      {
        title: "Write a Behind-The-Scenes Description",
        content: "Craft a captivating behind-the-scenes description for an OnlyFans photoshoot. Emphasize exclusive access and intimate details to intrigue and excite subscribers."
      },
      {
        title: "Brainstorm Interactive Posts",
        content: "Generate ideas for interactive OnlyFans posts that encourage audience participation and feedback. The ideas should be innovative and tailored to the content niche."
      },
      {
        title: "Write Automated Responses",
        content: "Draft thoughtful and personalized responses to fan questions on OnlyFans. Ensure the responses are engaging, friendly, and provide valuable insights."
      },
      {
        title: "Write Scripts for Videos",
        content: "Write a script for an OnlyFans video that discusses a specified topic in an engaging and informative way. The script should encourage viewers to subscribe and interact."
      },
      {
        title: "Write Erotic Fiction",
        content: "Compose a steamy and engaging erotic story for OnlyFans that captivates and entices subscribers, ensuring the content is sensual and well-written."
      },
      {
        title: "Handle Customer Queries",
        content: "Draft clear and informative responses to frequently asked questions about subscribing to OnlyFans content, addressing topics like content offerings, payment methods, and benefits."
      }
    ]
  },
  {
    category: "Podcast",
    prompts: [
      {
        title: "Brainstorm Podcast Topics",
        content: "Generate a list of engaging and insightful topics for a podcast episode on a specified subject. Consider current trends, controversies, and audience interests."
      },
      {
        title: "Create Episode Title",
        content: "Generate catchy and descriptive titles for a podcast episode about a specified topic. Ensure the titles are engaging and accurately reflect the episode's content."
      },
      {
        title: "Suggest Interactive Content Ideas",
        content: "Propose interactive elements for a podcast episode, such as live Q&A sessions, polls, or audience-driven segments, to increase listener engagement."
      },
      {
        title: "Create Social Media Content",
        content: "Generate ideas for social media posts to promote a podcast episode featuring a specified guest speaker. Include key details, teasers, and call-to-actions."
      },
      {
        title: "Draft an Ad Script",
        content: "Write a concise 30-second ad script for a podcast episode that promotes a specified product. The script should highlight key features and include a clear call-to-action."
      },
      {
        title: "Write Episode Script",
        content: "Draft a complete script for a podcast episode on a specified topic. Ensure the script is engaging, includes an introduction, key discussion points, and a compelling conclusion."
      },
      {
        title: "Come Up With Interview Questions",
        content: "Generate a list of insightful interview questions for a podcast episode featuring an expert on a specified topic. Ensure the questions are open-ended and thought-provoking."
      },
      {
        title: "Help With Guest Outreach",
        content: "Draft an email invitation to a potential podcast guest, detailing the episode's focus, audience reach, and reasons why their participation would be valuable."
      },
      {
        title: "Help With Sponsor Outreach",
        content: "Write an email offering a sponsorship opportunity for a podcast. Explain the benefits of sponsorship, audience demographics, and next steps for discussion."
      }
    ]
  },
  {
    category: "TikTok",
    prompts: [
      {
        title: "Generate Video Ideas",
        content: "Brainstorm creative and engaging TikTok video ideas centered around a specified topic. Ensure the ideas are unique, attention-grabbing, and tailored to the TikTok audience."
      },
      {
        title: "Write Script",
        content: "Write a concise and entertaining script for a TikTok video about a specified topic. The script should capture attention quickly and include a call-to-action."
      },
      {
        title: "Analyze Current Trends",
        content: "Research current trending hashtags and topics on TikTok related to a specified subject. Provide a list of popular hashtags and insights into their effectiveness."
      },
      {
        title: "Write Creative Captions",
        content: "Craft a catchy and engaging caption for a TikTok video about a specified topic that encourages viewers to watch and interact with the video."
      },
      {
        title: "Get Feedback on Content",
        content: "Review a provided TikTok script and suggest improvements to increase engagement, ensuring the content is optimized for TikTok’s short-form video format."
      },
      {
        title: "Automate Comment Responses",
        content: "Write a well-crafted response to a comment on a TikTok video. The response should be friendly, engaging, and encourage further interaction."
      },
      {
        title: "Create Content Calendar",
        content: "Develop a detailed content calendar for a TikTok channel focused on a specified topic. Include posting frequency, content ideas, and special event dates."
      },
      {
        title: "Suggest TikTok Challenges",
        content: "Brainstorm creative ideas for a TikTok challenge that aligns with a specified channel theme and encourages user participation and viral sharing."
      }
    ]
  },
  {
    category: "LinkedIn",
    prompts: [
      {
        title: "Brainstorm LinkedIn Post Ideas",
        content: "Generate a series of engaging LinkedIn post ideas on a specified topic aimed at professionals. Include ideas that offer industry insights, career tips, and thought leadership."
      },
      {
        title: "Research and Gather Information",
        content: "Gather and compile relevant statistics, expert opinions, and data for a LinkedIn post on a specified topic. Ensure the information is current and from reputable sources."
      },
      {
        title: "Draft LinkedIn Post",
        content: "Write a compelling LinkedIn post on a specified topic that encourages engagement through questions, polls, or calls-to-action. Tailor the tone for a professional audience."
      },
      {
        title: "Suggest Images To Add",
        content: "Recommend appropriate images or graphics to accompany a LinkedIn post on a specified topic. Ensure the visuals are professional and enhance the overall message."
      },
      {
        title: "Edit & Refine",
        content: "Review and refine a LinkedIn post for clarity, engagement, and adherence to the brand's voice. Provide suggestions for improvements and enhanced SEO."
      },
      {
        title: "Analyze Trending Topics",
        content: "Identify and analyze current trending topics in a specified industry on LinkedIn. Provide insights on how to incorporate these trends into your content strategy."
      },
      {
        title: "Write a Catchy Headline",
        content: "Craft a concise and impactful headline for your LinkedIn profile that summarizes your expertise and unique value proposition."
      },
      {
        title: "Draft a Profile Summary",
        content: "Write a compelling LinkedIn profile summary that highlights your professional background, skills, and achievements, tailored to attract your target industry."
      },
      {
        title: "Suggest Relevant Skills",
        content: "Identify and recommend relevant skills for your LinkedIn profile based on your profession. Ensure these skills are aligned with industry standards and increase your profile's visibility."
      },
      {
        title: "Identify Important Keywords",
        content: "Conduct keyword research for your LinkedIn profile to identify high-impact keywords that reflect your profession. Provide a list of keywords along with suggestions for incorporation."
      },
      {
        title: "Request a Recommendation",
        content: "Draft a professional and personalized request for a LinkedIn recommendation from a specified contact. Highlight your past collaboration and the value they can speak to."
      },
      {
        title: "Write a Recommendation",
        content: "Compose a compelling LinkedIn recommendation for a specified individual that highlights their strengths, achievements, and professional impact."
      },
      {
        title: "Generate Post Ideas",
        content: "Brainstorm a list of innovative LinkedIn post ideas on a specified topic that encourage professional discussion and increased engagement."
      },
      {
        title: "Draft a Networking Message",
        content: "Write a concise and engaging LinkedIn networking message for a cold outreach to a potential professional contact. Establish common ground and a clear purpose for connecting."
      }
    ]
  }
];

export default promptData;
