from http.server import HTTPServer, BaseHTTPRequestHandler

class SimpleHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Hello, world!')

PORT = 3000

if __name__ == '__main__':
    server = HTTPServer(('localhost', PORT), SimpleHandler)
    print(f'Server running at http://localhost:{PORT}/')
    server.serve_forever() 