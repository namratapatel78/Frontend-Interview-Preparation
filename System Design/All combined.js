I am giving you the notes I have preapared for my frontend system design interview. I need a cheat sheet out of it which will cover all the main points mentioning just a name or little description, this is just to remember the points.

Facebook

RADIO - Requirements, High Level Architecture, Data model, Interface, Optimization/Performance

  1. REQUIREMENTS
    -> Clarify Functional and Non Functional (under the hood) Requirements
      Functional
        Must have
          - Post feed
          - Post support text, image (ask size of image) and videos - Image Optimization / Video Optimization
          - Infinite scroll - with virtualized list (react-window)
            - Use Intersection observer
            - Use Infinite Scroll Library
          - Add, delete or edit post
          - Like or comment on post
          - Basic user profiles
          - Active users ??
        Nice to have
          - Advanced privacy controls
          - Search functionality
      Non Functional
        - Performance - Fast load time (under 500ms per load)
        - Mobile support - responsive layouts
        - Offline access - Cache recent posts, support offline reads
        - Accessibility - Semantic elements, Keyboard navigation (Tab index or Tab Order), screen-reader support, color contrast, REM font, Aria labels
        - Internationalization (multi-language)
        - Security - Secure authentication, XSS prevention
        - Scalability - The system must scale to millions of users
        - Observability - Error logging, monitoring performance, tracking user journey
        - Data consistency - Real time updates vs eventual consistency
    -> Napkin math (Scale estimation) ??
    -> Clarify user roles and access patterns
      - Types of users - regular user, admin, guest
      - User actions - Reading posts, like post, comment on post, edit post
      - Authentication - Do they require authentication or they can view without it.
    -> Clarify data requirements
      - User data - Profile, preferences
      - Post data - Content, timestamp, media (stored separately in )
      - Media data - image/video stored separately (CDN or media storage)

  2. HIGH LEVEL ARCHITECTURE
    -> MVVM
      🧩 MVVM in React
        React components often become overly complex — handling data fetching, state, side effects, and UI all in one place. This leads to poor maintainability and testability.

        To address this, the MVVM (Model-View-ViewModel) pattern helps separate concerns:

        Model: Handles data & business logic (e.g., API, Redux)
        ViewModel: Uses hooks/container components to manage state, side effects, and prepare data
        View: UI components that only render props (presentational)

                    ┌────────────────────────┐
                    │        Clients         │
                    │ (Browser, Mobile Web)  │
                    └────────────┬───────────┘
                                 │
                      HTTP(S) / API Calls
                                 │
                    ┌────────────▼───────────┐
                    │       React App        │
                    └────────────┬───────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
        ▼                        ▼                        ▼
 ┌───────────────┐      ┌────────────────┐        ┌──────────────────┐
 │    View       │ uses │  ViewModel     │fetches/│     Model        │
 │ (UI Component)│----->│ (Hooks /       │------->│ (API layer /     │
 │               │      │  Container Comp│ updates│  Business Logic) │
 └──────┬────────┘      └──────┬─────────┘<-------└──────────┬───────┘
        │                     uses                        fetches /
        │               ┌──────────────┐                  updates
        │               ▼              ▼
        │        Local State /    Side Effects
        │       Derived Data     (useEffect, etc.)
        ▼
 ┌─────────────────────────────┐
 │      Component Library      │ (e.g., ShadCN, MUI)
 └─────────────────────────────┘


    -> MVC
      Model: API/data layer or Redux store
      View: React components (UI)
      Controller: Event handlers or useEffect logic that mediates between view and model
    -> MVC mixes UI and logic, harder to maintain in React.
      MVVM (with hooks as ViewModel) promotes clean code, testability, and aligns better with React's design.


  3. DATA MODEL - Build out the data types to render content on the client with typescript
    -> useState, useContext, Redux, Recoil, Zustand, MobX
    -> useContext vs Redux
    -> Data persistence
      - Local Storage
      - Session Storage
      - Cookies
      - IndexedDB:
        Pro - Ample storage, supports complex objects, asynchronous
        Cons - API is more complex, browser quirks
    -> Scoped vs Global state
      Scoped
        - State used only in one component or a small subtree
        - Only the owning component and its children re-render when the state changes. Keeps updates local and efficient.
      Global
        - State is shared across multiple views or distant components
        - All components that consume the global state will re-render on any state change, which can impact performance if not managed carefully.
    -> Client Data Model: Refer https://frontendlead.com/system-design/client-only-data-management-frontend-design

  4. API

  API INTERFACE - Choose protocol for the API layer and explain why - https://frontendlead.com/system-design/interface-communication-frontend-system-design
    -> HTTP (Rest)
      - News feed (scrolling to load posts or pulling new content)
      - Profile/Settings management (fetching and updating user preferences)
      - Analytics dashboard (loading & filtering resports or metrics)
    -> Short polling - Client frequently requests new data on a timer ??
      - Client controls the timing.
      - Server responds immediately, even if there's no new data.
      - Requests are sent at fixed intervals (e.g., every 5 seconds).
      - Consumes more bandwidth and server resources.
      - Less efficient, especially when updates are rare.
      - Real-time experience is limited due to fixed delays.
      - Slower
    -> Long polling ??
      - Server controls the timing.
      - Server holds the request until new data is available or it times out.
      - Client sends the next request only after the previous one finishes.
      - Fewer requests overall, making it more efficient.
      - Better use of resources.
      - Provides a near real-time experience.
      - Slower
      - Easy to load balance ??
      - Firewall protection ??
    -> WebSockets - Full duplex persistent 2-way communication over 1 single TCP connection - Need deep research ??
      - Chat application (real time messaging b/w users)
      - Collaborative editing (multiple users editing the same document)
      - Fast
      - Expensive - Takes up lot of memory on server and client to keep the connection open
      - Need to create Firewalls and load balancing yourself ??
      - Not http2 friendly - no multiplexing ??
    -> Server Sent Events (SSE) - Server pushes data to client, client receives in real time (one way communication)
      - Live notifications (Instant alerts or status updates)
      - AI/Streaming response (Streaming generated text like ChatGPT)
    -> GraphQL - Pull the data we need
      - Profile/Settings management (fetching and updating user preferences)
      - Analytics dashboard (loading & filtering resports or metrics)
      - HTTP2 friendly
      - Type friendly
    -> Web rtc

    -> HTTP1 vs HTTP2 -> https://frontendlead.com/system-design/web-protocols-cheat-sheet - Create diagram in Excalidraw and save it
      - Supports multiplexing (no more request blocking) - allowing multiple requests and response to be sent asynchronously over a single TCP connection reducing latency and improves page load time.
      - Parallel requests
      - Request prioritization: Resources can be prioritized to load critical ones first. how ??
      - Server push: Server can send assets (like CSS/JS) without a client request. how ??
      - Header compression - less data sent per request - The dynamic table is a shared in-memory structure maintained separately by both client and server during a connection. It stores header name-value pairs that have been sent recently, so that future messages can refer to them by index instead of resending them.
        - Size-limited	The table has a maximum size (usually ~4KB by default, configurable).
        - Indexed headers	Headers get an index (like position in an array) as they're added.
        - Eviction	When it exceeds the max size, oldest entries are removed (FIFO).
        - Shared knowledge Client and server must stay in sync about what's in the table.
        - Secure per connection	Each client-server connection maintains its own dynamic table.


  API DESIGN
    -> Discuss what HTTP protocol you will use and why (HTTP 1 or 2)

    -> Design the API
      POST /login
      {
        "email": "user@example.com",
        "password": "123456"
      }
    -> Request type
      - GET - Fetches data
      - POST - Sends data
      - PUT/PATCH - Update data
      - DELETE - Remove data
    -> Authentication
      - Use JWT (JSON Web Tokens) or OAuth2 - Research more ??
      - Token sent in request headers: Authorization: Bearer <token>
      - Secure endpoints should validate the token.
    -> Request inputs
      - Query parameters (/users?page=2)
      - URL parameters (/user/:id)
      - Request body (for POST/PUT)
    -> Requests outputs (high level): Describe what the server will return
      - Data structure (JSON)
      - Error messages
      - Pagination (if list)
    -> Mention status codes: Use standard HTTP status codes
      - 200 OK – success
      - 201 Created – resource created
      - 400 Bad Request – validation errors
      - 401 Unauthorized – auth failed
      - 404 Not Found – resource missing
      - 500 Internal Server Error – server crash
    -> Expected response
      - Always return consistent structure
      - Include status, message, and data
      - Error responses should have meaningful messages
      - Example:
        // success
        {
          "status": "success",
          "data": { ... }
        }
        // error
        {
          "status": "error",
          "message": "User not found"
        }

      -> API Design Best Practices
        - Version your API: Use /api/v1/... to support future changes safely.
        - Consistent naming: Stick to a clear naming style (camelCase or snake_case).
        - Secure authentication: Use tokens/headers, avoid sensitive data in URLs.
        - Correct status codes: Return appropriate HTTP status (200, 400, 401, etc).
        - Clear error messages: Include error code and message for better debugging.
        - Filtering & sorting: Allow clients to control data needs efficiently.
        - Avoid over-fetching: Use GraphQL or well-designed REST to fetch only needed fields.
        - Documentation: Keep API specs updated for smooth frontend-backend collaboration.

      -> Common Request Headers
        GET /api/v1/gql/feed
        - Authorization: Bearer eyJhbGci0i... -  used for authenticating the user session.
        - Content-Type: application/json - specifies the format of the request body.
        - X-User-ID: user_12345 - User identifier for tracking or personalization
        - Accept-Language: en-US - Sets the preferred language for localized responses.
        - X-Request-ID: 123e4567-e89b-12d3-a456-426614174000 - Optional, used for tracing and debugging across distributed systems or microcervices.

  5. OPTIMIZATIONS / PERFORMANCE
   -> Types of Front-End Performance Bottlenecks
    - Network bottlenecks: Large payloads, slow APIs, or too many requests.
      Solution
        - Use HTTP/2
        - Compression Headers: By sending compression headers, server to respond with compressed data
          - gzip (supported in 100% browsers, fast)
          - brotli (supported in 95% modern browsers, slow, better compression)

          Client header -> Accept-Encoding: gzip, br
          Server response -> 1. Content-Encoding: br    2. Vary: Accept-Encoding
        - Caching
          - Browser Cache (HTTP cache) - Caches all kinds of resources and API response
            If a cached resource has not expired, the browser will serve it directly from its local cache without making a network request to the server for that resource.

            1. Client/browser requests static resource (css. html, images, js)
              GET /logo.png HTTP/1.1
              Host: example.com
              Server/CDN responds with cache headers
            2. Server responds with:
              Cache-Control: max-age=86400, public -> means cache for 1 day and public allows any cache (e.g. browser, CDN) to store it.
              ETag: 'xyz-123' - Validator header HTTP uses for conditional requests.
            3. Browser caches logo.png for 86400 seconds (1 day). Remembers the ETag ("xyz-123").
            4. Client/browser requests static resource (css. html, images, js)
              GET /logo.png HTTP/1.1
              Host: example.com
              If-None-Match: "xyz-123"
            5. Server checks if the resource's ETag is unchanged. If unchanged, responds:
            HTTP/1.1 304 Not Modified
            Cache-Control: max-age=600
            6. Browser uses its cached copy. Updates expiry time as instructed by server.
          - Through CDN (AWS, Cloudflare): Client–CDN–OriginServer
            A Content Delivery Network (CDN) is a system of geographically distributed servers (Edge Servers or Points of Presence/PoPs) designed to deliver web content—such as images, videos, JavaScript, CSS, and even dynamic data—efficiently and reliably to users worldwide

            Basic Flow:
            User Request: A browser requests a resource (e.g., an image or a webpage).
            DNS Lookup: The DNS points the user to a nearby CDN edge server rather than the origin server.
            Cache Hit/Miss:
              - If the edge server has a cached copy (“cache hit”), it delivers the resource instantly.
              - If not (“cache miss”), the edge server fetches it from the origin, caches it, and serves it to the user.
            Subsequent Requests: Future requests for that asset from other users in the same region are served directly from the cache.

            Key Components of a CDN
            Component	Description
            Origin Server: Stores and maintains the authoritative copy of all content.
            Edge Servers / PoPs: Geographically distributed servers that cache and serve content to users nearby.
            DNS Servers: Direct user requests to the optimal edge server based on location and network health.
          - Service Worker (Client-Controlled Offline Cache):

            Caches all kinds of resources and API response

            A service worker is a background JavaScript process that gives you fine-grained control over how your app interacts with the network and caches, enabling key features for progressive web applications, including offline access, speedy resource retrieval, and background capabilities.

            The cache data used by service workers is stored in the browser's Cache Storage, which is a specific, sandboxed storage accessible to service workers. This Cache Storage is separate from other storage mechanisms like localStorage or IndexedDB, though IndexedDB can also be used by service workers if needed.

            Cached files persist beyond page reloads until explicitly deleted or invalidated by the app or user.

            The service worker starts and stops automatically as needed, conserving resources.
            Service workers are also terminated when not in use and will be restarted by the browser when a relevant event occurs

            - Offline experiences and full offline web apps
            - Faster loading through aggressive client-side caching
            - Push notifications for re-engagement
            - Background sync (like submitting forms once the user is back online)
            - Advanced asset and API caching strategies.
            - Works with HTTPS or local environment - Ensures all communications are secure


            Scenario
              Progressive Web App with a service worker installed.
              User visits app. Service Worker intercepts network requests.
              Service Worker logic:
                Checks CacheStorage (custom, managed JS cache).
                Could instantly return cached shell/resources, even offline.
                Also can fetch from network in background to update cache for next visit.
          - Key Takeaways:
            Browser, CDN, and service worker caches all use HTTP headers and request-response patterns to decide when/how assets are reused.

            ETag, Cache-Control, and Expires headers dictate cache freshness, validation, and updating.

            Conditional requests minimize bandwidth—browser often gets data “for free” from disk or nearby CDN edge.

            Service workers add another programmable layer for next-level control and offline support.
          - Apollo Client for GraphQL data ?? - Learn
        - Batch request
        - Image Optimizations
        - Bundle Splitting / Lazy loading
        - Compress all static resources
          - Use Webpack Compression Plugins During Build
    - Rendering bottlenecks: Too much DOM, inefficient updates, or unoptimized rendering cycles. Rendering is where users differentiate between a slow and a fast app. If your UI lags, jumps around, or doesn't load content in the correct order, people notice immediately

    - JavaScript execution: Heavy libraries, unnecessary code, or blocking scripts.
      - Delegate some work like Calculations to web worker - This will not block the JS thread
    - Asset delivery: Large images, fonts, or video assets that slow down page loads.
    - Device constraints: Slow CPUs, low memory, or poor graphics on specific user devices.
   -> How to Measure Performance in a React App
    1. Local Measurement (Dev Environment)
      Use tools like:
      - Google PageSpeed Insights
      - Chrome DevTools
      - Lighthouse
      - React Profiler / Redux DevTools
      - Helps identify:
      - Slow components
      - Rendering bottlenecks
      - JS execution time
    2. User-Centric (Real-World) Measurement
      Track performance from actual users to get accurate insights.
      Key metrics to measure:
      - TTI (Time to Interactive): When page becomes usable
      - FCP (First Contentful Paint): When first visible content appears
      - FPS (Frames Per Second): Smoothness of animations and scrolling
      - LCP (Largest Contentful Paint): Time to render largest visible content
      - CLS (Cumulative Layout Shift): Visual stability
    3. Send Metrics to Monitoring Tools - GA, Amplitude
    4. Key Takeaway
      - Don't optimize blindly.
      - Always measure first, find bottlenecks, then optimize based on real user data.

  6. Accessibility
    -> Keyboard navigation - Enables navigation without a mouse; essential for motor-impaired and screen reader users
    -> Screen reader support - aria attributes - Provides semantic info for assistive technologies to convey UI structure and state
    -> Color constrast - Ensures text and UI elements are distinguishable by users with visual impairments
    -> REM fonts - Allows font size scaling respecting user preferences for better readability
    -> HTML semantics element


  7. Security: https://frontendlead.com/system-design/frontend-security-best-practices-for-web-applications
    -> Authentication
    -> Authorization
    -> XSS - Cross Site Scripting attack - injects malicious script
      - React comes with sanitization or you can use DOMPurify API to sanitize HTML
      - Use correct Content Security Policy Headers so that we are requesting data and it's coming from trusted source
      - Input validation and sanitization
    -> CORS - Ensure correct Cross Origin Resource Sharing policy to make sure that the data which we are receiving is from the trusted source
    -> HTTPS - Secure and Performant
    -> Cross Site Request Forgery (CSRF) Protection - CSRF tokens and Same-Site Cookies
    -> Session management
    -> Dependency scanning


--------------------------------------

Extra points:

1. Testing
  - Unit test using jest for logic-heavy utilities
  - Integration tests for UI interactions
  - End to end test using cypress




--------------------------------------------------------------------------------

What are Container Components in React?
Container components (also called smart components) are responsible for:
  Handling data fetching
  Managing state and side effects
  Passing data to presentational (dumb) components
They do not render much UI themselves — instead, they act as a bridge between logic (ViewModel) and the UI (View).


// UserListContainer.tsx - Container component
import React, { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import UserList from "./UserList";

const UserListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return <UserList users={users} />;
};

export default UserListContainer;

// UserList.tsx - Presentation component
const UserList = ({ users }) => (
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
);

export default UserList;

--------------------------------------------------------------------------------

🔍 Impact of Doubling Users in a Web App
✅ 1. Frontend (React App)
Minimal direct impact: React apps are served as static files (JS, CSS, HTML), typically via CDNs.

Impacts may include:
Increased load time if CDN or hosting has bandwidth limits.
More API requests per second sent to backend.
Potential rate-limiting or blocked requests if APIs can't handle the surge.

✅ 2. Backend/API Layer
Direct impact: More users = more requests = more server load.

Consequences:
Increased CPU and memory usage
Slower response times
Higher latency or timeouts
Database contention or increased read/write loads
Need for scaling APIs horizontally (load balancing, more server instances)

✅ 3. Database
More concurrent read/write operations.

Could hit:
Connection limits
Query performance degradation
Locking issues if not optimized

✅ 4. Infrastructure (Server, CDN, Load Balancer)
More bandwidth and storage usage

Potential cost increase on:
Hosting
CDN egress traffic
Database storage & throughput

May require:
Autoscaling policies
Caching strategy improvements
Enhanced monitoring and alerts

📈 Example: If 3000 users generate 30,000 API calls/day
Doubling users = 6000 → 60,000 API calls/day

If your backend supports 100 RPS (requests per second), and this load peaks simultaneously, you could exceed capacity, leading to:
Dropped or throttled requests
Downtime
Poor user experience

💡 What You Should Do as a Frontend Developer
Use caching (localStorage, SWR, React Query) to minimize API hits.
Implement pagination, infinite scroll, lazy loading to reduce payload size.
Avoid unnecessary re-renders to improve performance.
Use CDNs and image optimizations.

--------------------------------------


When designing the architecture for a front-end application, there are several additional considerations to keep in mind:

Performance: Ensure that the application is responsive and performs well under various conditions. This can involve optimizing the Ul rendering, minimizing the number of network requests, and reducing the size of the data being transferred. Techniques such as lazy loading, caching, and debouncing can help improve the application's performance.

Scalability: Design the application to handle increasing users and data. This can involve using techniques such as pagination, infinite scrolling, and virtualized lists to manage large amounts of data. It can also include designing the architecture to support horizontal scaling, such as using load balancers and distributed data stores.

Maintainability: Ensure that the application is easy to maintain and extend. This can involve using modular components, following coding standards, and writing tests. It can also include managing the codebase using tools such as linters, code formatters, and version control systems.

Security: Protect the application from security threats like cross-site scripting (XSS), cross-site request forgery (CSRF), and SQL injection. This can involve using techniques such as input validation, output encoding, and secure communication protocols. It can also include the following best practices for authentication and authorization, such as using OAuth and JWT.

User Experience: Design the application to provide a positive user experience. This can involve using techniques such as responsive design, accessibility, and internationalization. It can also include the following best UI design practices: consistent layouts, straightforward navigation, and intuitive interactions.

--------------------------------------

Virtualization

Virtualization in React is a technique that optimizes rendering performance for large datasets by only rendering the components that are currently visible in the viewport, plus a small buffer around them, instead of rendering every item in a long list or grid. This significantly improves performance, memory usage, and user experience by keeping the number of DOM nodes low, even when the underlying data is massive.

Dynamic Rendering: Only items in the visible range (plus a small buffer for smooth scrolling) are rendered. As the user scrolls, the window shifts and the rendered items change accordingly


-----------------------

Video Optimizations

Audio Track Removal: For muted or background videos, removing the audio track reduces file size and bandwidth

Resolution Reduction: Deliver videos in resolutions appropriate for the display context (e.g., 720p instead of 4K) to avoid unnecessarily large files

Video Poster Images: Use a poster attribute to show an image placeholder before the video loads, improving perceived performance, though it adds some extra request overhead

Adaptive Streaming / Multi-Resolution Sources: Serve multiple resolutions and use player libraries (like VideoJS or streaming protocols like HLS) that auto-select streams based on connection speed, user device, or player size

Automatic Quality and Format Tuning: Platforms like Cloudinary’s React SDK automatically optimize video format and quality on the fly, delivering the best balance of size and visual fidelity

Lazy Loading Videos: Load video content only when near the viewport, reducing initial page load times and bandwidth,.

Use of CDNs: Deliver video assets via Content Delivery Networks to reduce latency and improve download speeds globally


RADIO

Requirements:	Ask clarifying questions and state assumptions (scale, features, clients)
Architecture:	Sketch high-level frontend architecture (components, data flow)
Data Model:	Define key data entities for frontend state
Interface (API):	Discuss API design, data fetching, caching strategies
Optimization:	Discuss performance, accessibility, error states

FUNCTIONAL REQUIREMENTS
1. Infinite scroll - Intersection observer & Virtualization

NON FUNCTIONAL REQUIREMENTS
1. SSR vs CSR
  - SSR -> Faster initial loading and SEO
  - CSR -> Slower initial loading and for more interactive UI
  - Hybrid rendering: SSR for initial loading and CSR for interactions - need more resources
2. Mobile responsive
3. Performance
4. Accessibility
5. Internationalization (multi-language)
6. Observability
7. Offline access
8. Scalability - The system must scale to millions of users
9. Security
  - Secure authentication
  - XSS prevention (input validation and html sanotization)
  - CORS policy
  - Rate limiting
  - CSRF (use Same-Site cookie or CSRF token)
10. React vs Angular vs Vue
11. Browser compatibility

HIGH LEVEL ARCHITECTURE
- MVVM or MVC
  - MVVM - Diagram for how is the connection b/w View, ViewModel and Model
  - MVC - Need diagram for how is the connection b/w View, ViewModel and Model ??
- Create UI wireframe
- Divide into components


DATA MODEL and API DESIGN
- List down entities
- Mention state, store (Context or Redux)
- API contract

API INTERFACE - Data Transfering Protocol
- Choose API protocol

DONE:

React Fiber and how react works internally
DOM rendering vs Canvas

------------------------------------------------------------------

CSS preprocessors - SCSS, Tailwind CSS, CSS - https://www.perplexity.ai/search/answer-me-wrt-frontend-system-zp3CSVNhRUuQPZyTmiWyJg


Use SCSS when building complex, scalable frontend systems that need highly customized styling patterns and maintainable CSS architecture.

Use Tailwind CSS to accelerate development with utility-first styling, especially for large teams needing consistency and speed.

Use vanilla CSS mainly for simple or legacy projects.

------------------------------------------------------------------
React vs Anglular vs Vue: https://www.perplexity.ai/search/react-vs-anglular-vs-vue-what-e6ZfJggFRWikhJb3dCad0w

------------------------------------------------------------------

Chat application

------------------------------------------------------------------

svg vs canvas

------------------------------------------------------------------

Image or video upload component : The image upload flows from the user → frontend validation → get pre-signed URL → frontend uploads directly to cloud storage → cloud storage serves as CDN origin → CDN caches and delivers the image globally → frontend gets CDN URL to display the image.

------------------------------------------------------------------

How to implement notification in web app: https://www.perplexity.ai/search/how-to-implement-notification-v.0_BY1BQBGzVM7rrCD60w

------------------------------------------------------------------

Calculations based on assumptions for Scale
Example for Instagram
- 1 million daily active users - 100,0000
- 1 daily post per user / 100 post view per post -> read / write ratio
- 1pm lunch tine, 9pm evening - 70% users active
- 700,000 active users during peak time
- 100 * 700,000 - (8 to 10) - 2hr
- 100 * 700000 / (2 * 60 * 60) = 10k rps (request persecond) - load on server

Common Assumptions in Frontend System Design Interviews

1. User Scale and Traffic

Approximate number of users or concurrent users (e.g., millions of daily active users for Instagram).

Average requests per second (RPS) or peak load to estimate scalability needs.

2. Device and Browser Environment

Target platforms (desktop web, mobile browsers, native apps, etc.).

Network conditions (slow mobile networks, offline usage).

3. Performance and Latency Requirements

What is an acceptable load time or interaction latency?

What are the expectations around animation smoothness or responsiveness?

4. Functional Requirements and Features

Core features in scope (e.g., feed display, uploading posts, commenting).

Whether features like real-time updates, offline mode, or multi-device sync are required.

5. Non-Functional Requirements

Accessibility support, internationalization, security concerns.

Scalability and maintainability expectations.

6. Technology Stack Constraints

Whether certain frontend frameworks/libraries are mandated or preferred.

Restrictions on using certain backend APIs or services.

https://www.perplexity.ai/search/caching-client-side-and-cdn-wh-9HRfgsohQkSoJH7rmqSiuQ?0=d

https://www.perplexity.ai/search/caching-client-side-and-cdn-wh-9HRfgsohQkSoJH7rmqSiuQ

🔧 What Are Compression Headers?
They are HTTP headers used by the client to request compressed content and by the server to respond with compressed data.

Compression reduces the size of assets like HTML, CSS, JS, and JSON — speeding up delivery and reducing network usage.

🧭 How It Works (Client ↔ Server)
1. Client Request
The client (usually a browser) includes the Accept-Encoding header:

GET /app.js HTTP/1.1
Host: example.com
Accept-Encoding: gzip, br
This tells the server:

“I can handle compressed responses using gzip or brotli (br) — send whichever you support.”

2. Server Response
If compression is enabled, the server checks Accept-Encoding, compresses the response, and includes the Content-Encoding header:

HTTP/1.1 200 OK
Content-Encoding: br
Content-Type: application/javascript
Vary: Accept-Encoding
This tells the browser:

“Here’s the content, compressed with Brotli. Please decompress it before using.”

✅ What the Headers Mean
Header	Direction	Purpose
Accept-Encoding	Client → Server	Lists compression formats the client supports
Content-Encoding	Server → Client	Indicates how the response was compressed
Vary	Server → Client	Caches must vary response based on encoding used

📦 Compression Formats
Format	Pros	Support
Gzip	Fast, widely supported	~100%
Brotli	Better compression, slower	>95% (modern browsers)

🧪 Real Example
Request:

GET /main.css HTTP/1.1
Host: yourapp.com
Accept-Encoding: gzip, deflate, br
Server response (with Brotli):

HTTP/1.1 200 OK
Content-Type: text/css
Content-Encoding: br
Vary: Accept-Encoding
Content-Length: 7453
If the client didn’t send Accept-Encoding, server would send uncompressed:
HTTP/1.1 200 OK
Content-Type: text/css
Content-Length: 23485
🚀 How to Enable on Server
Nginx Example:
nginx
# Enable GZIP
gzip on;
gzip_types text/plain application/json text/css application/javascript;

# Enable Brotli (requires module)
brotli on;
brotli_types text/plain application/json text/css application/javascript;
Node.js Express Example:
js
const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression()); // uses gzip by default

app.get('/', (req, res) => {
  res.send('Hello World');
});
⚠️ Gotchas
Don't compress binary formats like images (JPEG/PNG are already compressed).

Always set Vary: Accept-Encoding to prevent cache mismatches.

Brotli is better for static files (pre-compress with .br during build).


-----------

Compression like Gzip and Brotli is applied only to text-based assets (HTML, CSS, JS, JSON) because they contain repetitive patterns that compress well, significantly reducing file size. Binary assets (images, videos, fonts) are already compressed using specialized algorithms, so recompressing them offers little to no benefit and wastes server CPU.

https://www.perplexity.ai/search/caching-client-side-and-cdn-wh-9HRfgsohQkSoJH7rmqSiuQ?0=d

https://www.perplexity.ai/search/caching-client-side-and-cdn-wh-9HRfgsohQkSoJH7rmqSiuQ

What Caching Solves
Reduces unnecessary network round trips: Data is served quickly from a nearer or local source, saving bandwidth and server resources.

Instant user experience: Resources are available immediately, making websites and apps feel faster and more reliable.

Types of Client-Side Caching
1. Browser Cache (HTTP Cache)
Modern browsers automatically cache web assets (HTML, CSS, JS, images) as per HTTP headers from the server. Main mechanisms include:

Cache-Control:
Directs browsers and CDNs on how and for how long assets can be stored locally.
Example:

text
Cache-Control: max-age=86400, public
max-age=86400 means cache for 1 day.

public allows any cache (e.g. browser, CDN) to store it.

ETag (Entity Tag):
Validator header HTTP uses for conditional requests.

When the browser has a cached copy, it asks the server: “Has this changed?” with the ETag.

If not changed, server returns 304 Not Modified, saving bandwidth.

Expires:
Deprecated in favor of Cache-Control, but specifies an absolute expiry date/time.

Example Table: HTTP Cache Headers
Header	Purpose	Typical Usage Example
Cache-Control	Set cache duration and policy	max-age=3600, public
ETag	Identify precise resource ver	"abc123"
Expires	Set absolute cache expiry	Tue, 01 Aug 2024 12:00:00 GMT
2. Service Worker Cache
Service Workers are browser scripts that sit between the network and application, allowing deeper control such as:

Precaching assets during install (app shell)

Caching API responses for offline-first apps

Serving cached assets immediately and updating in background (stale-while-revalidate)

CacheStorage API lets developers store custom responses beyond standard browser cache.

Ideal for PWAs and offline functionality.

Typical Strategies
Cache First: Serve from cache, update in background

Network First: Try network, fallback to cache if offline

Stale-While-Revalidate: Serve from cache, simultaneously update cache in background

3. GraphQL Client Caching (e.g., Apollo, Relay)
Caches structured data, not files/assets.

Normalized cache: Objects are stored by ID, enabling fine-grained updates and reuse.

Policy-driven fetching:

cache-first: Prefer cache, fall back to network if not found.

cache-and-network: Return cache if available, but always make a network request to refresh.

CDN (Server-Side) Caching
A Content Delivery Network (CDN) acts as an intermediate cache layer between client and origin server. It caches copies of resources in various edge locations close to users.

How CDNs Work
Cached Resources: Static assets (images, JS, CSS), and sometimes dynamic content.

Cache Key: Includes URL, cookies, headers that determine cache uniqueness.

Invalidation: Ability to purge assets or set short TTL (time-to-live) for rapidly changing data.

Server-Client Cooperation
Server: Sets cache headers (Cache-Control, ETag) indicating what can be cached and for how long.

CDN: Respects or overrides cache headers from origin.

Client: Uses browser cache per HTTP caching policies.

End-to-End Caching Flow
User visits a site:

Browser checks if asset is in cache and not expired.

If missing/stale, browser requests from CDN.

CDN receives request:

If asset is cached and valid, returns cached copy.

If not, forwards to origin server.

Origin server responds:

Sends file with caching headers.

CDN caches response (if allowed), forwards to browser.

Browser receives asset:

Caches locally as per directive.

Benefits and Challenges
Pros
Performance: Faster page load times and snappier experience.

Reduced Server Load: Less pressure on origin servers.

Offline support: Service workers enable apps to work even when disconnected.

Cons
Stale Data: Must manage cache invalidation.

Complexity: Modern patterns (e.g., GraphQL or service worker caching) require careful implementation to avoid bugs.

Consistency: Multiple cache layers (browser, CDN, service worker, in-memory clients) can complicate data freshness.

Summary Table: Caching Types and Their Features
Layer	Example	What It Caches	How It Invalidates / Updates
Browser HTTP Cache	Cache-Control, ETag	Web assets (HTML, CSS)	HTTP headers (max-age, ETag)
Service Worker Cache	Cache API, PWA	Any response, API data	Programmatically, by script
GraphQL Client	Apollo, Relay	Normalized data objects	Fetch policy, cache reset
CDN	Cloudflare, Akamai	Static/App assets	TTL, purge commands
By combining and configuring client-side and CDN caches wisely, web applications achieve fast and resilient delivery, balancing immediacy with freshness of content.






-------------------

Deep Dive: Exact Client–Server Interactions in Caching
Understanding how caching works between a client (browser/app) and a server (including a CDN) means examining the actual HTTP requests and responses, headers exchanged, decision logic in both browser and server, and how resources are delivered or validated.

1. First-Time Request: No Cache Present
Scenario
A user enters https://example.com/logo.png for the first time.

Step-by-Step Flow
Browser sends request:

text
GET /logo.png HTTP/1.1
Host: example.com
Server/CDN responds with cache headers:

text
HTTP/1.1 200 OK
Content-Type: image/png
Cache-Control: max-age=86400, public
ETag: "xyz-123"
Browser:

Caches logo.png for 86400 seconds (1 day).

Remembers the ETag ("xyz-123").

2. Subsequent Request: Within Cache Lifetime
Scenario
User refreshes the page within 1 day.

Browser:

Checks its cache.

Finds logo.png unexpired.

No HTTP request is sent.

Image loads instantly from local disk/RAM.

Result:

No network used.

User experiences instant load.

3. Request After Cache Expiry: Validating with Server
Scenario
User visits after more than 1 day (cache expired).

Browser sends conditional request:

text
GET /logo.png HTTP/1.1
Host: example.com
If-None-Match: "xyz-123"
Server logic:

Checks if the resource's ETag is unchanged.

If unchanged, responds:

text
HTTP/1.1 304 Not Modified
No payload sent.

Browser:

Uses its cached copy.

Updates expiry time as instructed by server.

Result:

Very little data transferred (just headers).

Quick load for user.

4. Resource Changed: Server Instructs Browser to Update
Scenario
Developer replaces the image file on server.

Browser sends conditional request:

text
GET /logo.png HTTP/1.1
Host: example.com
If-None-Match: "xyz-123"
Server:

Detects ETag changed (e.g., now "xyz-124").

Responds with new image and headers:

text
HTTP/1.1 200 OK
Content-Type: image/png
Cache-Control: max-age=86400, public
ETag: "xyz-124"
Browser:

Replaces local cache with new file and ETag.

5. Through a CDN: Client–CDN–Origin Server
Scenario
Browser requests style.css via a CDN.

Browser → CDN (Edge Node):

CDN checks if it already holds a current, cached copy.

If cached and valid:

CDN returns file to client directly, obeying origin’s cache headers.

If not cached or expired:

CDN fetches from origin server, caches based on headers:

text
Cache-Control: s-maxage=600, public
(s-maxage applies to shared caches like CDN.)

Returns file to client, stores for the next request.

Next user nearby:

Gets file from CDN edge without going to origin server.

6. Service Worker Example (Client-Controlled Offline Cache)
Scenario
Progressive Web App with a service worker installed.

User visits app. Service Worker intercepts requests.

Service Worker logic:

Checks CacheStorage (custom, managed JS cache).

Could instantly return cached shell/resources, even offline.

Also can fetch from network in background to update cache for next visit.

Example Table: Requests and Outcomes
Situation	HTTP Request	Server/CDN Response	Client Action	Data Fetched?
First load (no cache)	GET /x	200 OK, Cache-Control	Caches resource	Yes
Reload, unexpired cache	None	None	Loads from cache	No
After expiry, ETag matches	GET /x, If-None-Match: "y"	304 Not Modified	Uses existing cache	No (only headers)
After expiry, resource changed	GET /x, If-None-Match: "y"	200 OK, new ETag	Caches new resource	Yes
Via CDN, still valid	GET /x	CDN returns cached file	Caches per headers	No (fresh at edge)
Service Worker cache	JS checks/app cache first, then network	App shell returned by SW	Loads instantly, updates in BG	Sometimes
Key Takeaways
Browser, CDN, and service worker caches all use HTTP headers and request-response patterns to decide when/how assets are reused.

ETag, Cache-Control, and Expires headers dictate cache freshness, validation, and updating.

Conditional requests minimize bandwidth—browser often gets data “for free” from disk or nearby CDN edge.

Service workers add another programmable layer for next-level control and offline support.

This interplay enables fast, efficient delivery while maintaining data freshness and minimal server load.

----------------------

When a browser uses its cached copy and updates the expiry time as instructed by the server, here’s what happens in detail:

Storing the Resource with Expiry Information

When a browser successfully fetches a resource (like a CSS or JS file), it receives HTTP response headers from the server, such as:

text
Cache-Control: max-age=600
This instructs the browser that the resource is fresh and can be used for 600 seconds (10 minutes) without re-checking with the server.

Serving from Cache

For any subsequent requests to that resource made within the 10-minute “freshness” window, the browser:

Checks its local cache.

Finds the resource marked as fresh (not expired).

Serves the file directly from local storage (RAM or disk) without contacting the server at all.

Expiry and Revalidation

When the cached resource’s expiry time elapses (after 10 minutes in this example), the browser marks it as stale.

If the resource is requested again after expiry, the browser may send a conditional request using headers like If-None-Match or If-Modified-Since to ask the server whether the resource has changed.

Server Revalidates and Responds

If the server says the resource hasn’t changed (returns 304 Not Modified), the browser will:

Continue using its cached copy.

Update the expiry time according to any new directives sent in the latest response (e.g., receiving a new Cache-Control: max-age=600 effectively resets the “freshness” timer).

If the server says the resource has changed (200 OK with a new resource), the browser replaces its cached copy with the new data and corresponding new expiry info.

Summary—What “Updates expiry time as instructed by server” Means

The browser extends the cache freshness window, making the cached resource available for use without server communication until the new expiry time, thus boosting efficiency and performance.

Example Flow with Dates:

Initial Fetch:

Date: Sunday, July 20, 2025, 7:07 PM IST

Response: Cache-Control: max-age=600 (expires at 7:17 PM IST)

Subsequent Request at 7:10 PM:

Browser serves from cache; no network request.

Request at 7:18 PM (after expiry):

Browser sends conditional request.

Server responds 304 Not Modified, includes Cache-Control: max-age=600.

Browser updates expiry: now valid until 7:28 PM IST, keeps serving cached version until then.

This cycle repeats, ensuring efficient use of resources and minimal unnecessary traffic between client and server.

------------------------

Exceptions:

If the user does a normal reload, most browsers will still respect the cache rules and only revalidate resources if expired or required by headers.

If the user does a forced reload (e.g., Ctrl + F5), the browser bypasses the cache and re-downloads resources from the server, even if the cached version is still valid


----------------------------

Explain CDN in detail
You ran out of Pro search
Upgrade to Perplexity Pro to increase your daily limit
Explain CDN in detail
Content Delivery Network (CDN): Detailed Explanation
A Content Delivery Network (CDN) is a system of geographically distributed servers designed to deliver web content—such as images, videos, JavaScript, CSS, and even dynamic data—efficiently and reliably to users worldwide. CDNs play a key role in boosting website performance, reducing latency, increasing scalability, and enhancing security.

How a CDN Works
A CDN operates by placing servers (called Edge Servers or Points of Presence/PoPs) closer to users. Instead of every request going all the way to the original web server (origin), most requests are served from the nearest edge server. This process relies heavily on caching, as well as load-balancing and security optimizations.

Basic Flow:

User Request: A browser requests a resource (e.g., an image or a webpage).

DNS Lookup: The DNS points the user to a nearby CDN edge server rather than the origin server.

Cache Hit/Miss:

If the edge server has a cached copy (“cache hit”), it delivers the resource instantly.

If not (“cache miss”), the edge server fetches it from the origin, caches it, and serves it to the user.

Subsequent Requests: Future requests for that asset from other users in the same region are served directly from the cache.

Key Components of a CDN
Component	Description
Origin Server	Stores and maintains the authoritative copy of all content.
Edge Servers / PoPs	Geographically distributed servers that cache and serve content to users nearby.
DNS Servers	Direct user requests to the optimal edge server based on location and network health.
Techniques and Features
Caching:
Stores frequently requested static content (e.g., images, CSS) at the edge, minimizing trips to the origin server.

Dynamic Acceleration:
For content that cannot be cached (like personalized data), CDNs optimize the network connections and use persistent channels to the origin to accelerate transfers.

Load Balancing:
Distributes incoming user requests across multiple edge servers to maximize speed and reliability.

Edge Logic:
Some CDNs can perform computing tasks at the edge (e.g., image resizing, security checks), reducing the load on the origin server.

Security Enhancements:
Many CDNs offer DDoS protection, SSL/TLS encryption, Web Application Firewalls, and bot mitigation to secure websites.

Real-World Example
Suppose your website is hosted in New York. A user in Tokyo requests your homepage:

Without CDN: Each request travels from Tokyo to New York, resulting in high latency (delay) and slower load times.

With CDN: The user connects to a CDN edge server in Tokyo. If the requested resources are cached, they are delivered instantly. Only cache misses may trigger a longer request to New York.

Advantages of Using a CDN
Faster Content Delivery: Resources are served from the nearest location, reducing latency and page load times.

Higher Availability and Reliability: Even during traffic spikes or server issues, cached content remains accessible from multiple locations.

Scalability: Easily handles high volumes of traffic by distributing loads across the network.

Reduced Bandwidth Costs: Less traffic hits the origin, saving on hosting and bandwidth expenses.

Improved Security: Protection from DDoS attacks and enhanced encryption.

Consistent User Experience: Global visitors receive similar website speeds and reliability.

Potential Drawbacks
Cost: Premium CDN services can be expensive for high-traffic sites or advanced needs.

Control: Some loss of direct control over asset delivery, content invalidation, and debugging.

Geographical Limitations: If CDN edge locations do not align with your user base, benefits may be limited.

Complexity: Integrating and managing CDN configurations can require technical expertise.

Use Cases
Large or Global Websites: E-commerce, news, SaaS, or streaming platforms with diverse user bases.

Resource-Heavy Applications: Video streaming, large downloads.

Security-Conscious Sites: Sites requiring improved protection against DDoS and malicious attacks.

Sites with Traffic Spikes: Campaigns, ticket sales, or periodic events that attract heavy loads.

CDN vs. Traditional Web Hosting
Feature	Traditional Hosting	CDN
Location	Single or few geographic points	Globally distributed edge locations
Performance	Depends on distance to server	Fast—served from nearby edge location
Traffic Handling	Limited, origin may bottleneck	Scales across many distributed servers
Security	Basic	Advanced DDoS and WAF options
Conclusion
A CDN is essential for modern web performance and reliability, especially for businesses with a global audience or heavy demands. It accelerates content delivery, handles large volumes of users seamlessly, improves availability, and offers greater protection from attacks and outages—making it a key piece of the web infrastructure.


------------------

https://www.perplexity.ai/search/caching-client-side-and-cdn-wh-9HRfgsohQkSoJH7rmqSiuQ?0=d

https://www.perplexity.ai/search/caching-client-side-and-cdn-wh-9HRfgsohQkSoJH7rmqSiuQ

A service worker is a specialized JavaScript script that acts as an intermediary—a programmable proxy—between your web app, browser, and the network. It enables powerful features such as offline access, advanced caching, network request interception, background sync, and push notifications, and is one of the foundational technologies behind Progressive Web Apps (PWAs).

Key Properties
Runs in the Background: Service workers execute separately from the main web page, on a different thread, and are non-blocking.

Works Beyond Tab Lifetime: They can run tasks when the user isn’t actively on the site, such as handling push notifications.

Secure Context Required: Only works over HTTPS (or localhost for development) to prevent security threats.

Event-Driven: They react to events like network requests (fetch), installation, activation, push notifications, etc..

No Direct DOM Access: Service workers can’t access or manipulate the web page DOM, but can communicate with pages via messaging.

Granular, Programmable Caching: Service workers use the Cache API, enabling custom, script-driven caching strategies distinct from standard HTTP cache.

How Service Workers Work
High-level workflow:

Registration:
The main JavaScript of your site registers the service worker:

js
navigator.serviceWorker.register('/sw.js');
Installation:
The browser installs the service worker (runs the install event), where you typically pre-cache key assets.

Activation:
After successful installation, the activate event fires. Old caches can be cleaned up here.

Controlling Fetch and Other Events:
Once active, the service worker intercepts all network requests made from pages it controls. You can:

Serve cached resources

Update caches in the background

Fallback to offline pages when the network is unavailable

Lifecycle Management:
Service workers are spun up only when needed and are “killed” when not in use to minimize resource usage.

Service Worker Caching (Cache API)
Unlike standard browser caching (using HTTP headers), service worker caching is programmatic and fully controlled via JavaScript logic. This allows:

Pre-caching static assets during installation for instant load and offline support

Stale-while-revalidate: serving cached resources instantly, while updating in the background

Fine-grained cache management: specify what gets cached, when to expire, and how to update

Example: Offline Support Flow
User first visits site:

Service worker installs, precaches /index.html, /styles.css, etc.

User goes offline, revisits site:

Service worker intercepts requests and serves resources from its custom cache, so the app works offline.

Common Use Cases
Offline experiences and full offline web apps

Faster loading through aggressive client-side caching

Push notifications for re-engagement

Background sync (like submitting forms once the user is back online)

Advanced asset and API caching strategies.

Service Worker Lifecycle Overview
Stage	Event	Description
Registration	—	Page registers the service worker
Installation	install	SW is fetched and installed
Activation	activate	SW takes control, old SWs cleaned up
Active	fetch, etc.	SW intercepts events, handles logic
Redundant	—	SW is replaced or unregistered
Limitations
No access to the DOM directly

APIs are asynchronous and use Promises (no synchronous APIs like localStorage)

Cannot dynamically import modules; only static import is allowed

Runs only over secure origins (HTTPS)

Why are Service Workers Game-Changing?
They shift the web from being "online-only" to delivering fast, resilient, and native-like experiences, including working reliably on flaky or zero connectivity, sending push updates to users, and enabling rich app features straight from your browser.

In summary:
A service worker is a background JavaScript process that gives you fine-grained control over how your app interacts with the network and caches, enabling key features for progressive web applications, including offline access, speedy resource retrieval, and background capabilities.

------------------------------------

What are the key lifecycle stages of a service worker's operation

Registration

Occurs when the main web page registers the service worker using JavaScript.

This step creates the service worker and sets it up for install, but the service worker isn’t yet controlling any pages.

Installation

The service worker is downloaded, parsed, and executed.

The install event is fired. Here, you typically pre-cache essential resources.

If installation fails (e.g., errors in code), the service worker is discarded.

Activation

After a successful install, the activate event fires.

The service worker now takes control of its clients (pages in scope).

Common tasks here include cleaning up old caches or migrating data.

Running/Idle (Event Handling)

The active service worker can now intercept and handle events, most notably network requests (fetch), push notifications, and background sync.

The service worker starts and stops automatically as needed, conserving resources.

Redundancy/Termination

When a new version of the service worker is available and installed, the old one is marked as “redundant” and is eventually terminated.

Service workers are also terminated when not in use and will be restarted by the browser when a relevant event occurs.

Summary Table:

Lifecycle Stage	Description
Registration	Main page registers SW
Installation	Download and precache resources
Activation	Cleanup, take control of pages in scope
Running/Idle	Handles events (fetch, sync, push, etc.)
Redundancy	Termination and removal of outdated SW version
References:
: Workbox documentation
: web.dev articles
: dev.to article
: Educative

-----------------------------------------------------------------------------

Explain PWA in detail.
A Progressive Web App (PWA) is a web application that uses modern web technologies and best practices to deliver an experience similar to a native mobile or desktop app, but is built entirely using web standards like HTML, CSS, and JavaScript. PWAs are designed to be fast, reliable, installable, and capable of working offline or with unreliable network connections.

Key Features and Capabilities
Offline Functionality:
PWAs can work without an internet connection by using service workers to cache resources and data. This allows users to load previously visited pages, interact with content, and perform tasks even when offline (e.g. browsing a product catalog, filling out a form).

Installability:
Users can “install” a PWA on their device home screen or desktop without going through app stores. The app gets its own icon and launches in a standalone window, enhancing the native feel.

App-Like Experience:
PWAs feel and behave like native apps with features such as fast loading, smooth animations, responsive layouts, and immersive full-screen modes. They can also send push notifications and access device capabilities on supporting platforms.

Automatic Updates:
PWAs can update in the background without requiring manual user intervention, ensuring that the app always delivers the latest content and features.

Security:
PWAs require HTTPS, ensuring secure data transfer and robust user protection.

Discoverability:
Because they are standard web apps, PWAs are indexed by search engines, improving visibility and reach.

Cross-Platform:
PWAs run on any device with a standards-compliant browser (Windows, macOS, Android, iOS, Linux) and adapt to varying screen sizes and input types.

Core Technologies Behind PWAs
Service Worker:
A JavaScript file that runs in the background, intercepts network requests, manages caching, and enables offline mode and background tasks like push notifications.

Web App Manifest:
A JSON configuration file that defines the app’s name, icons, display behavior, theme colors, and how it launches. This is what allows a browser or OS to “install” the PWA like a native app.

HTTPS:
Ensures all communications are secure, which is a technical requirement for service workers.

Advantages of PWAs
Faster load times due to efficient caching and asset management.

Improved user engagement thanks to push notifications, home screen installation, and offline capabilities.

Lower development cost, since one codebase serves all platforms and eliminates the need for separate native apps.

Greater reach because they’re linkable, shareable, and discoverable on the open web.

Real-World Results:
Major companies have reported significant improvements after adopting PWAs (e.g., Twitter saw more pages per session and lower bounce rates; AliExpress saw higher conversion rates).

Typical PWA Usage Flow
User visits a PWA-enabled site in their browser.

Service worker is registered and activates, starting to cache critical resources.

Web app manifest allows the site to prompt the user to install the app on their device.

On subsequent visits (even offline), the service worker retrieves and serves cached assets, enabling instant loads and offline functionality.

Comparison Table: PWA vs. Traditional Web App vs. Native App
Feature	PWA	Web App	Native App
Offline Support	Yes	No/Limited	Yes
App Store Presence	Optional	Rare	Required
Push Notifications	Yes	No	Yes
Installable	Yes	No	Yes
Update Channel	Background/web	Web	App Store
Device APIs	Many (growing)	Limited	Full
In Summary
A Progressive Web App combines the reach and flexibility of the web with many of the capabilities and usability benefits of native apps. By leveraging service workers, manifests, and modern browser APIs, PWAs empower developers to build robust, installable, secure, and engaging experiences that work seamlessly across devices and networks.


https://www.perplexity.ai/search/image-optimization-don-t-just-PEPDUhvDT.WQDSXjMn.NFA

-> Don't just serve original images. Use a microservice or cloud provider to compress and resize images on the fly. Always pull pictures at the exact size needed for the UI. This avoids wasting bytes on oversized assets.

The service performs on-the-fly transformations, such as:
  - Resizing the image to requested dimensions.
  - Compressing the image to reduce file size while balancing quality.
  - Converting file format (e.g., JPEG to WebP or AVIF) based on request or detected client support.
  - Stripping unnecessary metadata to further shrink the file.

To do:
  - Use srcSet/sizes and/or <picture> for responsive, modern images.
  - Image URLs point to a service that resizes/compresses images on-the-fly based on query parameters.
  - The browser or React app computes and requests exactly the image dimensions needed for each UI situation, ensuring no oversized assets are downloaded
  - On a device with a high pixel density, the browser may prefer a 2x image (e.g., 640px wide for a 320px display area).

To find the required dimensions and format of an image for a specific device and UI layout in a React app, you need to:
- Dynamically determine how large the image should appear in your layout (based on container, device, and pixel ratio).
- Optionally, check browser support for image formats (e.g., WebP, AVIF).


-> Lazy loading (loading="lazy") ensures images just outside the initial viewport aren’t downloaded until they’re needed,



Rendering Performance
  -> SSR or CSR or Hybrid rendering ?? (SSR for initial load, CSR for interactions)
  -> Application cache - Local storage, Cookies, Session storage
  -> FP, FCP, LCP, TTI, CLS
  -> Skeleton loaders
  -> Handle success, errors and loading state
  -> Mobile friendly
  -> Bundle Splitting
  -> Preload JS when needed - Lazy loading
  -> Import only what you need - import only the required function from the package
  -> Defer non critical script
  -> Virtualization
    - Used for rendering large lists. Instead of rendering all items in the list, which can lead to performance issues and slow down the application, virtualization only renders the items that are currently visible within the user's viewport.
    - As the user scrolls, the window dynamically moves. Components that scroll out of view are unmounted (removed from the DOM), and new components that scroll into view are mounted (added to the DOM). This significantly reduces the number of DOM nodes React needs to manage, leading to improved performance.
    - it tries to reuse existing DOM elements and update their content as the user scrolls to minimize expensive DOM operations.

       Aspect	                  - Explanation
    1. Components unmount/mount -	Items leaving viewport are unmounted; new visible items mounted (React lifecycle).

    2. DOM nodes reuse/recycle	- Underneath, virtualization often reuses a pool of DOM nodes by moving and updating them for new items, minimizing costly DOM operations and improving performance.


  -> Rate limit - Throttle / Debounce
  -> Tree Shaking - Eleminate dead code
    Example steps in a CRA or Webpack-based project:

    - Use ES6 module imports/exports throughout your code.
    - Set "sideEffects": false in package.json.
    - Import only what you use from external libraries (no blanket imports).
    - Run npm run build for a production bundle.
    - (Optional) Run a bundle analyzer to confirm tree shaking results.

    By following these guidelines, you reduce bundle size and improve app performance by ensuring only the code actually needed by your app is shipped to users
  -> CSS Optimizations - https://www.perplexity.ai/search/rendering-is-where-users-diffe-dNNvgWOfQgqdQrQ9.TZSMg
    - Layout thrashing occurs when the browser is forced to repeatedly recalculate styles and layouts due to JavaScript that reads from and writes to the DOM in quick succession.
    Batch DOM reads separately from writes to avoid unnecessary layout recalculations.
    - Minify CSS and remove unused styles (e.g., with PurgeCSS) to reduce bundle size.
    - Prefer CSS transitions and keyframe animations over JavaScript-based animations.
    - Use flat, single-class selectors (like BEM) for faster style resolution and maintainable CSS.
    - Use tools like Chrome DevTools, Lighthouse, and Stylelint to audit and monitor CSS performance.
    Animate only transform and opacity to leverage GPU acceleration and avoid layout or paint costs.
    Inline CSS (CSS-in-JS) helps with critical styles and faster first paint, especially in SSR setups.
    Avoid deeply nested selectors and keep class names short, scoped, and meaningful.
    Use will-change to hint the browser about upcoming animations for performance.
    Apply contain to isolate layout or paint changes within components.


https://www.perplexity.ai/search/security-is-a-critical-part-of-i4E2pIOaRzW_ibTeO7hIaQ

Security in modern frontend systems like React apps is a multilayered challenge that requires coordinated measures across the client (browser), browser environment, and server.

Example: Secure React Login Flow
On login, server sets sessionid cookie with HttpOnly, Secure, SameSite=Strict.

Client (React) does not store this token anywhere in JS—browser attaches it automatically.

All internal fetch/axios calls use relative URLs and expect 401/403 errors to trigger logout UI—but never display backend error text.

All API endpoints on the server check session and permissions.

Server sends CSP header; React components do not use dangerouslySetInnerHTML except with libraries like DOMPurify.

Dependency checking is automated in CI, and any new dependency is manually reviewed for risk.

Summary Table

Threat	React App (Client) Example	Browser Role	Server Actions & Headers
XSS Prevention	Sanitize & avoid raw HTML, DOMPurify	Enforce CSP, block inline scripts	Set CSP header, encode outputs
Rate Limiting	Throttle UI events	None	Enforce IP/user rate limiting
CORS	Handle failed requests	Block by default	Allow only trusted origins
CSRF	Send/receive CSRF token	Enforce SameSite cookies	Generate & check tokens, stand cookie flags
Auth/Authorization	Never trust frontend only, no sensitive storage	Enforce cookie security	Check credentials/permissions per API call
Secure Storage	Avoid localStorage/sessionStorage for tokens	Block JS access by HttpOnly cookies	Set cookies with HttpOnly, Secure
CSP	Avoid inline scripts/styles	Enforce script/style origin	Set CSP, limit allowed resources
HTTPS	Use https endpoints, no mixed content	Warn/block mixed content	Redirect to https, enable HSTS
Error Handling	Show safe, user-centric errors	None	Log internal, show non-sensitive error to user
Dependency Auditing	Use npm audit/yarn audit in CI	None	Automate security scanning in CI/CD
This coordinated approach, especially when building React apps, is essential for robust security.



-> CSP
  - Restrict which sources can execute JavaScript on the page
  - CSP headers from the server further reduce risk by restricting script execution at the browser level
  - Content Security Policy (CSP) headers are highly effective in blocking inline scripts and reducing XSS risks because they give the browser precise instructions about what sources of executable code are permitted on a web page.
  - With CSP in Place:
    When a site sends a strict CSP header—specifically with script-src that excludes 'unsafe-inline'—the browser will by default block any inline JavaScript:

    <script>alert("Hacked!")</script> will not execute.

    Inline event handlers in HTML (such as <button onclick="someFunction()">) will not run.

    JavaScript URLs and some dangerous DOM APIs like eval() can be disallowed.

    Only scripts from explicitly whitelisted sources (e.g., your domain or a specific CDN) are allowed

Feature	WebSockets	Server-Sent Events (SSE)
Communication Type	Full-duplex (two-way): client and server can send data simultaneously.	Unidirectional (server to client only).
Underlying Protocol	Custom protocol over a single TCP connection, requiring a handshake to upgrade HTTP.	Built on standard HTTP/1.1 or HTTP/2 connection, no handshake needed.
Data Type Support	Supports both binary and UTF-8 text data.	Supports only UTF-8 text data.
Connection Management	Requires explicit handling of connection lifecycle including reconnections.	Automatic reconnection and event ID tracking built-in by browser default.
Firewall and Proxy Issues	Can be blocked or problematic behind certain corporate firewalls or proxies because of non-HTTP protocol.	Works over HTTP, so it passes easily through firewalls and proxies.
Browser Limits	No specific browser-imposed limit on open connections (limited by server capabilities).	Usually limited to 6 concurrent connections per browser.
Implementation Complexity	More complex to implement and maintain due to two-way state. Requires WebSocket server support.	Simpler to implement on server side; can use plain HTTP servers.
Use Cases	Real-time interactive apps requiring bidirectional communication such as chat, multiplayer games, collaborative editing.	Real-time feeds like live news, stock tickers, notifications where client mainly receives updates.
Performance	Lower overhead after connection established, efficient for high-frequency, low-latency data exchange.	Slightly higher overhead due to HTTP headers but good enough for many real-time update scenarios.
Scalability	More challenging due to persistent, bidirectional connections.	Easier to scale leveraging existing HTTP infrastructure.

CORS, or Cross-Origin Resource Sharing, is a security feature implemented by browsers to control how resources (like APIs, fonts, or images) are requested from a different domain than the one the web page originated from.


Why CORS Exists
Web browsers enforce the same-origin policy, which restricts web pages from making requests to a different domain than the one that served the page. This policy protects users from malicious sites trying to access sensitive data from another site. However, many legitimate scenarios require cross-origin requests (for example, fetching data from a third-party API). CORS provides a controlled way to enable these requests.


How CORS Works
Request with Origin Header:
When a web page makes a cross-origin request (e.g., via fetch or XMLHttpRequest), the browser automatically adds an Origin header indicating the source of the request.


Server-Side Check:
The server receiving the request examines the Origin header. If the server is configured to allow requests from that origin, it includes specific CORS headers in its response.


Response Headers:


Access-Control-Allow-Origin: Specifies which origins are permitted. It might allow a specific origin (e.g., https://example.com) or use a wildcard (*) to allow any origin.
Access-Control-Allow-Methods: Lists the HTTP methods (e.g., GET, POST, PUT) permitted when accessing the resource.
Access-Control-Allow-Headers: Specifies which HTTP headers can be used during the actual request.
Access-Control-Allow-Credentials: Indicates whether the browser should include credentials like cookies or HTTP authentication in requests.
Preflight Requests:
For requests that aren’t considered “simple” (e.g., using methods like PUT or DELETE or custom headers), the browser first sends an HTTP OPTIONS request—this is known as a preflight request. The preflight checks if the actual request is safe to send by verifying the allowed methods and headers. If the preflight request is approved by the server, the browser proceeds with the actual request.

