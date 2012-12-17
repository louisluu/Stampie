var search_data = {
    'index': {
        'searchIndex': ["stampie","stampie\\adapter","stampie\\exception","stampie\\mailer","stampie\\adapter\\adapterinterface","stampie\\adapter\\buzz","stampie\\adapter\\guzzle","stampie\\adapter\\response","stampie\\adapter\\responseinterface","stampie\\exception\\apiexception","stampie\\exception\\httpexception","stampie\\mailer","stampie\\mailerinterface","stampie\\mailer\\mailchimpsts","stampie\\mailer\\postmark","stampie\\mailer\\sendgrid","stampie\\message","stampie\\messageinterface","stampie\\version","stampie\\adapter\\adapterinterface::send","stampie\\adapter\\buzz::__construct","stampie\\adapter\\buzz::getbrowser","stampie\\adapter\\buzz::send","stampie\\adapter\\guzzle::__construct","stampie\\adapter\\guzzle::getclient","stampie\\adapter\\guzzle::send","stampie\\adapter\\response::__construct","stampie\\adapter\\response::getstatuscode","stampie\\adapter\\response::getcontent","stampie\\adapter\\response::issuccessful","stampie\\adapter\\response::getstatustext","stampie\\adapter\\responseinterface::getstatuscode","stampie\\adapter\\responseinterface::getcontent","stampie\\adapter\\responseinterface::getstatustext","stampie\\adapter\\responseinterface::issuccessful","stampie\\exception\\apiexception::__construct","stampie\\exception\\httpexception::__construct","stampie\\exception\\httpexception::getstatuscode","stampie\\mailer::__construct","stampie\\mailer::setadapter","stampie\\mailer::getadapter","stampie\\mailer::setservertoken","stampie\\mailer::getservertoken","stampie\\mailer::send","stampie\\mailer::getheaders","stampie\\mailerinterface::setadapter","stampie\\mailerinterface::getadapter","stampie\\mailerinterface::setservertoken","stampie\\mailerinterface::getservertoken","stampie\\mailerinterface::getendpoint","stampie\\mailerinterface::getheaders","stampie\\mailerinterface::format","stampie\\mailerinterface::handle","stampie\\mailerinterface::send","stampie\\mailer\\mailchimpsts::getendpoint","stampie\\mailer\\mailchimpsts::format","stampie\\mailer\\mailchimpsts::handle","stampie\\mailer\\postmark::getendpoint","stampie\\mailer\\postmark::handle","stampie\\mailer\\postmark::getheaders","stampie\\mailer\\postmark::format","stampie\\mailer\\sendgrid::getendpoint","stampie\\mailer\\sendgrid::setservertoken","stampie\\mailer\\sendgrid::handle","stampie\\mailer\\sendgrid::format","stampie\\message::__construct","stampie\\message::getto","stampie\\message::sethtml","stampie\\message::settext","stampie\\message::gethtml","stampie\\message::gettext","stampie\\message::getheaders","stampie\\message::getreplyto","stampie\\message::getcc","stampie\\message::getbcc","stampie\\messageinterface::getfrom","stampie\\messageinterface::getto","stampie\\messageinterface::getcc","stampie\\messageinterface::getbcc","stampie\\messageinterface::getsubject","stampie\\messageinterface::getreplyto","stampie\\messageinterface::getheaders","stampie\\messageinterface::gethtml","stampie\\messageinterface::gettext"],
        'info': [["Stampie","","Stampie.html","","",3],["Stampie\\Adapter","","Stampie\/Adapter.html","","",3],["Stampie\\Exception","","Stampie\/Exception.html","","",3],["Stampie\\Mailer","","Stampie\/Mailer.html","","",3],["AdapterInterface","Stampie\\Adapter","Stampie\/Adapter\/AdapterInterface.html","","Interface all adapters must implement.",1],["Buzz","Stampie\\Adapter","Stampie\/Adapter\/Buzz.html","","Adapter for Kriss Wallsmith's Buzz library",1],["Guzzle","Stampie\\Adapter","Stampie\/Adapter\/Guzzle.html","","Guzzle Adapter (guzzlephp.org)",1],["Response","Stampie\\Adapter","Stampie\/Adapter\/Response.html","","Immutable implementation of ResponseInterface",1],["ResponseInterface","Stampie\\Adapter","Stampie\/Adapter\/ResponseInterface.html","","Interface for returned content by adapters",1],["ApiException","Stampie\\Exception","Stampie\/Exception\/ApiException.html"," < RuntimeException","SubException",1],["HttpException","Stampie\\Exception","Stampie\/Exception\/HttpException.html"," < RuntimeException","Exception thrown for all HTTP Error codes where the",1],["Mailer","Stampie","Stampie\/Mailer.html","","Minimal implementation of a MailerInterface",1],["MailerInterface","Stampie","Stampie\/MailerInterface.html","","Takes a MailerInterface and sends to to Postmark throgh",1],["MailChimpSts","Stampie\\Mailer","Stampie\/Mailer\/MailChimpSts.html"," < Mailer","A Mailer for MailChimp STS http:\/\/mailchimp.com\/features\/simple-transactional-service\/",1],["Postmark","Stampie\\Mailer","Stampie\/Mailer\/Postmark.html"," < Mailer","Sends emails to Postmark server",1],["SendGrid","Stampie\\Mailer","Stampie\/Mailer\/SendGrid.html"," < Mailer","Mailer to be used with SendGrid Web API",1],["Message","Stampie","Stampie\/Message.html","","Implementation of MessageInterface where only getFrom()",1],["MessageInterface","Stampie","Stampie\/MessageInterface.html","","Represents a simple Message.",1],["Version","Stampie","Stampie\/Version.html","","",1],["AdapterInterface::send","Stampie\\Adapter\\AdapterInterface","Stampie\/Adapter\/AdapterInterface.html#method_send","(string $endpoint, string $content, array $headers = array())","",2],["Buzz::__construct","Stampie\\Adapter\\Buzz","Stampie\/Adapter\/Buzz.html#method___construct","(<abbr title=\"Buzz\\Browser\">Browser<\/abbr> $browser)","",2],["Buzz::getBrowser","Stampie\\Adapter\\Buzz","Stampie\/Adapter\/Buzz.html#method_getBrowser","()","",2],["Buzz::send","Stampie\\Adapter\\Buzz","Stampie\/Adapter\/Buzz.html#method_send","(string $endpoint, string $content, array $headers = array())","",2],["Guzzle::__construct","Stampie\\Adapter\\Guzzle","Stampie\/Adapter\/Guzzle.html#method___construct","(<abbr title=\"Guzzle\\Service\\Client\">Client<\/abbr> $client)","",2],["Guzzle::getClient","Stampie\\Adapter\\Guzzle","Stampie\/Adapter\/Guzzle.html#method_getClient","()","",2],["Guzzle::send","Stampie\\Adapter\\Guzzle","Stampie\/Adapter\/Guzzle.html#method_send","(string $endpoint, string $content, array $headers = array())","",2],["Response::__construct","Stampie\\Adapter\\Response","Stampie\/Adapter\/Response.html#method___construct","(integer $statusCode, string $content)","",2],["Response::getStatusCode","Stampie\\Adapter\\Response","Stampie\/Adapter\/Response.html#method_getStatusCode","()","",2],["Response::getContent","Stampie\\Adapter\\Response","Stampie\/Adapter\/Response.html#method_getContent","()","",2],["Response::isSuccessful","Stampie\\Adapter\\Response","Stampie\/Adapter\/Response.html#method_isSuccessful","()","",2],["Response::getStatusText","Stampie\\Adapter\\Response","Stampie\/Adapter\/Response.html#method_getStatusText","()","",2],["ResponseInterface::getStatusCode","Stampie\\Adapter\\ResponseInterface","Stampie\/Adapter\/ResponseInterface.html#method_getStatusCode","()","",2],["ResponseInterface::getContent","Stampie\\Adapter\\ResponseInterface","Stampie\/Adapter\/ResponseInterface.html#method_getContent","()","",2],["ResponseInterface::getStatusText","Stampie\\Adapter\\ResponseInterface","Stampie\/Adapter\/ResponseInterface.html#method_getStatusText","()","",2],["ResponseInterface::isSuccessful","Stampie\\Adapter\\ResponseInterface","Stampie\/Adapter\/ResponseInterface.html#method_isSuccessful","()","",2],["ApiException::__construct","Stampie\\Exception\\ApiException","Stampie\/Exception\/ApiException.html#method___construct","(string $message, <abbr title=\"Stampie\\Exception\\Exception\">Exception<\/abbr> $previous = null, integer $code)","",2],["HttpException::__construct","Stampie\\Exception\\HttpException","Stampie\/Exception\/HttpException.html#method___construct","($statusCode, $message = null, <abbr title=\"Stampie\\Exception\\Exception\">Exception<\/abbr> $previous = null, $code)","",2],["HttpException::getStatusCode","Stampie\\Exception\\HttpException","Stampie\/Exception\/HttpException.html#method_getStatusCode","()","",2],["Mailer::__construct","Stampie\\Mailer","Stampie\/Mailer.html#method___construct","(<a href=\"Stampie\/Adapter\/AdapterInterface.html\"><abbr title=\"Stampie\\Adapter\\AdapterInterface\">AdapterInterface<\/abbr><\/a> $adapter, string $serverToken)","",2],["Mailer::setAdapter","Stampie\\Mailer","Stampie\/Mailer.html#method_setAdapter","(<a href=\"Stampie\/Adapter\/AdapterInterface.html\"><abbr title=\"Stampie\\Adapter\\AdapterInterface\">AdapterInterface<\/abbr><\/a> $adapter)","",2],["Mailer::getAdapter","Stampie\\Mailer","Stampie\/Mailer.html#method_getAdapter","()","",2],["Mailer::setServerToken","Stampie\\Mailer","Stampie\/Mailer.html#method_setServerToken","(string $serverToken)","",2],["Mailer::getServerToken","Stampie\\Mailer","Stampie\/Mailer.html#method_getServerToken","()","",2],["Mailer::send","Stampie\\Mailer","Stampie\/Mailer.html#method_send","(<a href=\"Stampie\/MessageInterface.html\"><abbr title=\"Stampie\\MessageInterface\">MessageInterface<\/abbr><\/a> $message)","",2],["Mailer::getHeaders","Stampie\\Mailer","Stampie\/Mailer.html#method_getHeaders","()","Return an array of headers needed for this mailer.",2],["MailerInterface::setAdapter","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_setAdapter","(<a href=\"Stampie\/Adapter\/AdapterInterface.html\"><abbr title=\"Stampie\\Adapter\\AdapterInterface\">AdapterInterface<\/abbr><\/a> $adapter)","",2],["MailerInterface::getAdapter","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_getAdapter","()","",2],["MailerInterface::setServerToken","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_setServerToken","(string $token)","",2],["MailerInterface::getServerToken","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_getServerToken","()","",2],["MailerInterface::getEndpoint","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_getEndpoint","()","",2],["MailerInterface::getHeaders","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_getHeaders","()","Return a key -> value array of headers",2],["MailerInterface::format","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_format","(<a href=\"Stampie\/MessageInterface.html\"><abbr title=\"Stampie\\MessageInterface\">MessageInterface<\/abbr><\/a> $message)","Return a a string formatted for the correct Mailer",2],["MailerInterface::handle","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_handle","(<a href=\"Stampie\/Adapter\/ResponseInterface.html\"><abbr title=\"Stampie\\Adapter\\ResponseInterface\">ResponseInterface<\/abbr><\/a> $response)","If a Response is not successful it will be passed to",2],["MailerInterface::send","Stampie\\MailerInterface","Stampie\/MailerInterface.html#method_send","(<a href=\"Stampie\/MessageInterface.html\"><abbr title=\"Stampie\\MessageInterface\">MessageInterface<\/abbr><\/a> $message)","",2],["MailChimpSts::getEndpoint","Stampie\\Mailer\\MailChimpSts","Stampie\/Mailer\/MailChimpSts.html#method_getEndpoint","()","Splits the ServerToken up and uses the last part as",2],["MailChimpSts::format","Stampie\\Mailer\\MailChimpSts","Stampie\/Mailer\/MailChimpSts.html#method_format","(<a href=\"Stampie\/MessageInterface.html\"><abbr title=\"Stampie\\MessageInterface\">MessageInterface<\/abbr><\/a> $message)","",2],["MailChimpSts::handle","Stampie\\Mailer\\MailChimpSts","Stampie\/Mailer\/MailChimpSts.html#method_handle","(<a href=\"Stampie\/Adapter\/ResponseInterface.html\"><abbr title=\"Stampie\\Adapter\\ResponseInterface\">ResponseInterface<\/abbr><\/a> $response)","\"You can consider any non-200 HTTP response code an",2],["Postmark::getEndpoint","Stampie\\Mailer\\Postmark","Stampie\/Mailer\/Postmark.html#method_getEndpoint","()","",2],["Postmark::handle","Stampie\\Mailer\\Postmark","Stampie\/Mailer\/Postmark.html#method_handle","(<a href=\"Stampie\/Adapter\/ResponseInterface.html\"><abbr title=\"Stampie\\Adapter\\ResponseInterface\">ResponseInterface<\/abbr><\/a> $response)","",2],["Postmark::getHeaders","Stampie\\Mailer\\Postmark","Stampie\/Mailer\/Postmark.html#method_getHeaders","()","Return an array of headers needed for this mailer.",2],["Postmark::format","Stampie\\Mailer\\Postmark","Stampie\/Mailer\/Postmark.html#method_format","(<a href=\"Stampie\/MessageInterface.html\"><abbr title=\"Stampie\\MessageInterface\">MessageInterface<\/abbr><\/a> $message)","",2],["SendGrid::getEndpoint","Stampie\\Mailer\\SendGrid","Stampie\/Mailer\/SendGrid.html#method_getEndpoint","()","",2],["SendGrid::setServerToken","Stampie\\Mailer\\SendGrid","Stampie\/Mailer\/SendGrid.html#method_setServerToken","(string $serverToken)","",2],["SendGrid::handle","Stampie\\Mailer\\SendGrid","Stampie\/Mailer\/SendGrid.html#method_handle","(<a href=\"Stampie\/Adapter\/ResponseInterface.html\"><abbr title=\"Stampie\\Adapter\\ResponseInterface\">ResponseInterface<\/abbr><\/a> $response)","",2],["SendGrid::format","Stampie\\Mailer\\SendGrid","Stampie\/Mailer\/SendGrid.html#method_format","(<a href=\"Stampie\/MessageInterface.html\"><abbr title=\"Stampie\\MessageInterface\">MessageInterface<\/abbr><\/a> $message)","",2],["Message::__construct","Stampie\\Message","Stampie\/Message.html#method___construct","(string $to)","",2],["Message::getTo","Stampie\\Message","Stampie\/Message.html#method_getTo","()","",2],["Message::setHtml","Stampie\\Message","Stampie\/Message.html#method_setHtml","(string $html)","",2],["Message::setText","Stampie\\Message","Stampie\/Message.html#method_setText","(string $text)","",2],["Message::getHtml","Stampie\\Message","Stampie\/Message.html#method_getHtml","()","",2],["Message::getText","Stampie\\Message","Stampie\/Message.html#method_getText","()","",2],["Message::getHeaders","Stampie\\Message","Stampie\/Message.html#method_getHeaders","()","",2],["Message::getReplyTo","Stampie\\Message","Stampie\/Message.html#method_getReplyTo","()","",2],["Message::getCc","Stampie\\Message","Stampie\/Message.html#method_getCc","()","",2],["Message::getBcc","Stampie\\Message","Stampie\/Message.html#method_getBcc","()","",2],["MessageInterface::getFrom","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getFrom","()","",2],["MessageInterface::getTo","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getTo","()","",2],["MessageInterface::getCc","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getCc","()","",2],["MessageInterface::getBcc","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getBcc","()","",2],["MessageInterface::getSubject","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getSubject","()","",2],["MessageInterface::getReplyTo","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getReplyTo","()","",2],["MessageInterface::getHeaders","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getHeaders","()","",2],["MessageInterface::getHtml","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getHtml","()","",2],["MessageInterface::getText","Stampie\\MessageInterface","Stampie\/MessageInterface.html#method_getText","()","",2]]
    }
}
search_data['index']['longSearchIndex'] = search_data['index']['searchIndex']