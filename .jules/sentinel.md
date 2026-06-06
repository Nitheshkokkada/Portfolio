## 2025-05-22 - [Contact Form Denial of Service Prevention]
**Vulnerability:** Missing input length limits on contact form fields (Name, Email, Message).
**Learning:** Large payloads in form submissions can be used to perform Denial of Service (DoS) attacks or cause buffer overflows in downstream systems if length is not validated.
**Prevention:** Always implement `maxLength` attributes on frontend inputs and corresponding length validation on the backend to ensure data integrity and system stability.
