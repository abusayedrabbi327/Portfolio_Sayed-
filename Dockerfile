# --- Stage 1: Build Static Assets ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies cleanly
RUN npm ci

# Copy full source tree
COPY . .

# Build pure static HTML/CSS/JS output
RUN npm run build

# --- Stage 2: Ultra-lightweight Nginx Production Server (<25MB) ---
FROM nginx:alpine

# Copy optimized nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Healthcheck for container orchestration (Kubernetes / Docker Swarm / Coolify)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
