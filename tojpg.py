from flask import Flask, request ##เอามาสร้าง api (microfreamwork)
import numpy as np
import pydicom
from PIL import Image
from flask_cors import CORS ##กันerror อนุญาตให้เราใช้ ข้อมูล Request ข้าม Domain อื่น ๆ ได้
app = Flask(__name__) ## ไฟล์ Main ที่จะเอาไว้รัน Flask App
CORS(app) #อนุญาตให้serverอื่นมาเรียกอันนี้ได้

@app.route('/api') ## สร้าง URL เพื่อทำการชี้หรือ Map ไปที่ URLs ที่ต้องการ เส้นทางการเข้าถึงข้อมูล
def JPG():
    name = request.args['img']
    im = pydicom.dcmread(name)
    im = im.pixel_array.astype(float)
    rescaled_image = (np.maximum(im,0)/im.max())*255
    final_image = np.uint8(rescaled_image)
    final_image = Image.fromarray(final_image)
    final_image.save('./api/image/change.jpg')
    print(name)
    return name

if __name__ == "__main__":
    app.run(debug=True)