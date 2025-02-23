deploy:
	npm run build
	aws s3 sync out s3://nexus-over.com --delete
	aws cloudfront create-invalidation --distribution-id E1EQUR0UTCABPK --paths "/*"
