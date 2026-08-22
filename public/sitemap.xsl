<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>GTA Vi Spot — XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #334155;
            background-color: #f8fafc;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            border: 1px solid #e2e8f0;
          }
          h1 {
            color: #0f172a;
            margin-top: 0;
            font-size: 26px;
            border-bottom: 3px solid #e84590;
            padding-bottom: 12px;
          }
          p {
            color: #64748b;
            font-size: 14px;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 24px;
          }
          th {
            background-color: #f1f5f9;
            color: #475569;
            text-align: left;
            padding: 14px 16px;
            font-size: 13px;
            font-weight: 600;
            border-bottom: 2px solid #cbd5e1;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          td {
            padding: 14px 16px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 14px;
            word-break: break-all;
          }
          a {
            color: #e84590;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p>
            This XML Sitemap is generated to help search engines (like Google and Bing) discover and index all content on <strong>gtavispot.com</strong>.
          </p>

          <!-- Check if it is a sitemap index or a urlset sitemap -->
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
              <p>
                Total Sitemaps in this Index: <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong>
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Sitemap URL</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td>
                        <xsl:variable name="itemURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$itemURL}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <xsl:value-of select="sitemap:lastmod"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <p>
                Total URLs in this Sitemap: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
              </p>
              <table>
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Priority</th>
                    <th>Change Freq</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <xsl:variable name="itemURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$itemURL}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <xsl:value-of select="sitemap:priority"/>
                      </td>
                      <td>
                        <xsl:value-of select="sitemap:changefreq"/>
                      </td>
                      <td>
                        <xsl:value-of select="sitemap:lastmod"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
