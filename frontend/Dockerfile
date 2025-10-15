# Use Nginx to serve static files
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy your static HTML file(s) into the Nginx web root
COPY Devops_Intern.html index.html

# Expose port 80 (Nginx default)
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
