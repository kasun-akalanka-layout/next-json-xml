import { Builder, parseString } from 'xml2js'

export function convertJsonToXml(jsonData: object): string {
  const builder = new Builder()
  return builder.buildObject(jsonData)
}

export function convertXmlToJson(xmlData: string): Promise<object> {
  return new Promise((resolve, reject) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

