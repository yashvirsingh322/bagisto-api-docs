---
outline: false
examples:
  - id: create-contact-us-basic
    title: Create Contact Us - Basic
    description: Submit a contact us form with name, email, contact number, and message.
    query: |
      mutation createContactUs($input: createContactUsInput!) {
        createContactUs(input: $input) {
          contactUs {
            success
            message
          }
        }
      }
    variables: |
      {
        "input": {
          "name": "John Doe",
          "email": "john@example.com",
          "contact": "+1234567890",
          "message": "I have a question about your products"
        }
      }
    response: |
      {
        "data": {
          "createContactUs": {
            "contactUs": {
              "success": true,
              "message": "Your message has been submitted successfully. We will get back to you shortly."
            }
          }
        }
      }
    commonErrors:
      - error: input-required
        cause: Input parameter is missing or incomplete
        solution: Provide all required input fields (name, email, contact, message)
      - error: invalid-email
        cause: The email address provided is not valid
        solution: Use a properly formatted email address (e.g. john@example.com)
      - error: validation-error
        cause: One or more fields fail server-side validation
        solution: Ensure name and message are non-empty strings, and email is valid

  - id: create-contact-us-with-mutation-id
    title: Create Contact Us - With Client Mutation ID
    description: Submit a contact us form and track the mutation with a client-side identifier.
    query: |
      mutation createContactUs($input: createContactUsInput!) {
        createContactUs(input: $input) {
          contactUs {
            success
            message
          }
          clientMutationId
        }
      }
    variables: |
      {
        "input": {
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "contact": "+0987654321",
          "message": "I would like to inquire about bulk order discounts for your clothing range.",
          "clientMutationId": "contact-form-001"
        }
      }
    response: |
      {
        "data": {
          "createContactUs": {
            "contactUs": {
              "success": true,
              "message": "Your message has been submitted successfully. We will get back to you shortly."
            },
            "clientMutationId": "contact-form-001"
          }
        }
      }
    commonErrors:
      - error: input-required
        cause: Input parameter is missing or incomplete
        solution: Provide all required input fields (name, email, contact, message)
      - error: invalid-email
        cause: The email address provided is not valid
        solution: Use a properly formatted email address
      - error: validation-error
        cause: One or more input fields fail validation
        solution: Ensure all fields meet the required format and length constraints

---

# Create Contact Us

## About

The `createContactUs` mutation allows customers to submit a contact form enquiry to the store. Use this mutation to:

- Submit customer enquiries from the storefront contact page
- Send support requests to the store team
- Allow guests (unauthenticated users) to reach out without an account
- Collect customer contact details alongside their message
- Track form submissions using `clientMutationId`
- Integrate contact forms in custom storefronts or mobile apps

This mutation does not require authentication — it is available to all visitors.

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `input` | `createContactUsInput!` | ✅ Yes | Input object containing all contact form fields. |

### Input Fields (`createContactUsInput`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `String!` | ✅ Yes | Full name of the person submitting the enquiry. |
| `email` | `String!` | ✅ Yes | Email address to reply to. Must be a valid email format. |
| `contact` | `String!` | ✅ Yes | Contact phone number (e.g. `+1234567890`). |
| `message` | `String!` | ✅ Yes | The enquiry or message body. |
| `clientMutationId` | `String` | ❌ No | Optional client-side identifier for tracking the mutation request. |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `contactUs.success` | `Boolean!` | `true` if the contact form was submitted successfully. |
| `contactUs.message` | `String!` | Human-readable confirmation or error message returned by the server. |
| `clientMutationId` | `String` | Echoed back from the input if provided; useful for client-side request tracking. |

## Use Cases

### 1. Storefront Contact Page
Trigger this mutation when a customer submits the contact form on `/contact-us`, then display the response `message` as a success or error notification.

### 2. Guest Enquiries
Since no authentication is required, use this mutation for anonymous visitors who want to reach out without creating an account.

### 3. Mobile App Contact Form
Integrate into a React Native or Flutter app to allow users to send support messages directly from within the app.

### 4. Track Submissions Client-Side
Pass a unique `clientMutationId` (e.g. a UUID) to correlate the GraphQL response with the originating form submission in your frontend state.

### 5. Headless Storefronts
Use in any headless commerce setup to power the contact form without relying on Bagisto's default frontend templates.

## Best Practices

1. **Validate on the client first** — Check email format and non-empty fields before calling the mutation to reduce unnecessary API calls
2. **Always check `success`** — Do not rely solely on the absence of errors; always read `contactUs.success` to confirm submission
3. **Display `message` to the user** — Show the server's response `message` as feedback so users know whether their enquiry was received
4. **Prevent duplicate submissions** — Disable the submit button after a successful response to avoid repeated submissions
5. **Rate limit on the server** — Ensure your Bagisto instance has rate limiting configured to protect this endpoint from abuse
6. **Use `clientMutationId` for tracking** — Pass a unique ID per submission if you need to correlate requests in analytics or error monitoring

## Related Resources

- [Customer Registration](/api/graphql-api/shop/mutations/customer-registration) - Register a new customer account
- [Customer Login](/api/graphql-api/shop/mutations/customer-login) - Authenticate a customer
- [Shop API Overview](/api/graphql-api/shop-api) - Overview of all Shop API resources
- [Best Practices](/api/graphql-api/best-practices) - GraphQL API best practices
